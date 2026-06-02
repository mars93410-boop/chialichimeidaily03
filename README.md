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

班表預設為檢視模式，不需要登入即可查看。點選「修改模式」時才會要求輸入修改密碼；Supabase 啟用後，知道共用修改密碼的人就可以修改並儲存到雲端。未設定 Supabase 時，會退回本機前端密碼 `cmh2026`。

Supabase 啟用後，密碼驗證會在資料庫 RPC 端完成；前端不保存雲端修改密碼。

## Supabase 雲端同步

此版本支援 Supabase 雲端同步：匿名使用者可以公開查看班表，知道修改密碼的人才能進入修改模式並儲存到雲端。

設定方式：

1. 建立 Supabase 專案。
2. 到 Supabase SQL Editor 執行 `supabase-schema.sql`。
3. 如果要變更預設修改密碼，在 SQL Editor 執行：

```sql
update private.schedule_settings
set edit_password_hash = crypt('你的新密碼', gen_salt('bf'))
where id = 'default';
```

4. 到 Project Settings > API 複製 Project URL 與 anon public key。
5. 編輯 `supabase-config.js`：

```js
window.SCHEDULE_SUPABASE_CONFIG = {
  url: "https://你的專案.supabase.co",
  anonKey: "你的 anon public key",
};
```

完成後重新部署。未設定 Supabase 時，網站仍可用內建資料顯示，但修改不會雲端保存。

未設定 Supabase 或雲端儲存失敗時，修改會先備份在目前瀏覽器的 `localStorage`，重新整理不會消失；但換電腦或換瀏覽器不會同步。要跨裝置同步仍需完成 Supabase 設定。
