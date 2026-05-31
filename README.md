# 佳里奇美醫院外科部排班網站

靜態排班總覽網站，可直接透過 GitHub Pages 部署。

## 本機預覽

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然後開啟：

```text
http://127.0.0.1:8000/index.html
```

## 資料檔

- `人員資料.xlsx`
- `doctor tel.xlsx`

網站會讀取同資料夾內的 Excel 資料。

## 修改權限

班表預設為檢視模式，不需要登入即可查看。點選「修改模式」時才會要求權限；Supabase 啟用後使用 Supabase Auth 帳號登入。未設定 Supabase 時，才會退回前端密碼 `cmh2026`。

這是靜態網頁的前端門檻，若要真正限制資料寫入或檔案更新，請搭配後端 API 或部署平台的登入權限。

## Supabase 雲端同步

此版本支援 Supabase 雲端同步：匿名使用者可以公開查看班表，登入 Supabase Auth 的使用者才能進入修改模式並儲存到雲端。

設定方式：

1. 建立 Supabase 專案。
2. 到 Supabase SQL Editor 執行 `supabase-schema.sql`。
3. 到 Authentication 建立可修改班表的使用者帳號。
4. 在 SQL Editor 加入可修改的 email：

```sql
insert into private.schedule_editors (email)
values ('your-editor@example.com')
on conflict (email) do nothing;
```

5. 到 Project Settings > API 複製 Project URL 與 anon public key。
6. 編輯 `supabase-config.js`：

```js
window.SCHEDULE_SUPABASE_CONFIG = {
  url: "https://你的專案.supabase.co",
  anonKey: "你的 anon public key",
};
```

完成後重新部署。未設定 Supabase 時，網站仍可用內建資料顯示，但修改不會雲端保存。
