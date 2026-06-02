create extension if not exists pgcrypto;

create schema if not exists private;

create table if not exists private.schedule_settings (
  id text primary key,
  edit_password_hash text not null
);

create table if not exists public.schedule_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by text
);

alter table public.schedule_state enable row level security;

drop policy if exists "Schedule is publicly readable" on public.schedule_state;
create policy "Schedule is publicly readable"
on public.schedule_state
for select
to anon, authenticated
using (true);

create or replace function private.check_schedule_password(password text)
returns boolean
language sql
security definer
set search_path = private, public, extensions
as $$
  select exists (
    select 1
    from private.schedule_settings
    where id = 'default'
      and edit_password_hash = crypt(password, edit_password_hash)
  );
$$;

create or replace function public.verify_schedule_password(password text)
returns boolean
language sql
security definer
set search_path = private, public, extensions
as $$
  select private.check_schedule_password(password);
$$;

create or replace function public.save_schedule_state(password text, schedule_data jsonb)
returns public.schedule_state
language plpgsql
security definer
set search_path = private, public, extensions
as $$
declare
  saved public.schedule_state;
begin
  if not private.check_schedule_password(password) then
    raise exception 'invalid schedule password' using errcode = '28000';
  end if;

  insert into public.schedule_state (id, data, updated_at, updated_by)
  values ('default', schedule_data, now(), 'password')
  on conflict (id) do update
  set
    data = excluded.data,
    updated_at = excluded.updated_at,
    updated_by = excluded.updated_by
  returning * into saved;

  return saved;
end;
$$;

grant execute on function public.verify_schedule_password(text) to anon, authenticated;
grant execute on function public.save_schedule_state(text, jsonb) to anon, authenticated;

do $$
begin
  alter publication supabase_realtime add table public.schedule_state;
exception
  when duplicate_object then null;
end $$;

-- Set or change the shared edit password here.
insert into private.schedule_settings (id, edit_password_hash)
values ('default', crypt('0000', gen_salt('bf')))
on conflict (id) do update
set edit_password_hash = excluded.edit_password_hash;
