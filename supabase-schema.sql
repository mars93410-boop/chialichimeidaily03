create schema if not exists private;

create table if not exists private.schedule_editors (
  email text primary key
);

create or replace function private.is_schedule_editor()
returns boolean
language sql
security definer
set search_path = private, auth, public
as $$
  select exists (
    select 1
    from private.schedule_editors
    where lower(email) = lower(auth.jwt() ->> 'email')
  );
$$;

grant execute on function private.is_schedule_editor() to authenticated;
grant usage on schema private to authenticated;

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

drop policy if exists "Editors can create schedule state" on public.schedule_state;
create policy "Editors can create schedule state"
on public.schedule_state
for insert
to authenticated
with check (id = 'default' and private.is_schedule_editor());

drop policy if exists "Editors can update schedule state" on public.schedule_state;
create policy "Editors can update schedule state"
on public.schedule_state
for update
to authenticated
using (id = 'default' and private.is_schedule_editor())
with check (id = 'default' and private.is_schedule_editor());

do $$
begin
  alter publication supabase_realtime add table public.schedule_state;
exception
  when duplicate_object then null;
end $$;

-- Add editor accounts after creating users in Supabase Authentication.
-- insert into private.schedule_editors (email)
-- values ('your-editor@example.com')
-- on conflict (email) do nothing;
