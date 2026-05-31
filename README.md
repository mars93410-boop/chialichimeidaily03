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
