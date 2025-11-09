# 🚀 部署到 Cloudflare Pages (pdzeng.com)

## 📋 前置準備

✅ 域名已在 Cloudflare 管理
✅ GitHub 帳號
✅ 代碼已準備好

---

## 🎯 部署步驟（完全免費）

### 1️⃣ 將代碼推送到 GitHub

```bash
# 初始化 Git（如果還沒有）
git init

# 添加所有文件
git add .

# 創建第一個 commit
git commit -m "Initial commit: Modern white CV website"

# 在 GitHub 創建新倉庫後，連接遠程倉庫
git remote add origin https://github.com/你的用戶名/你的倉庫名.git

# 推送代碼
git push -u origin main
```

### 2️⃣ 在 Cloudflare Pages 創建項目

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 點擊左側 **Workers & Pages**
3. 點擊 **Create application**
4. 選擇 **Pages** 標籤
5. 點擊 **Connect to Git**
6. 授權連接 GitHub
7. 選擇您的倉庫 `personal-cv`

### 3️⃣ 配置構建設置

在構建設置頁面填入以下信息：

| 設置項 | 值 |
|--------|-----|
| **Framework preset** | Next.js |
| **Build command** | `npm run build` |
| **Build output directory** | `.next` |
| **Root directory** | `/` （留空） |
| **Node version** | `18` 或 `20` |

環境變量（可選，目前不需要）：
- 如果有需要可以在 **Environment variables** 添加

### 4️⃣ 開始部署

1. 點擊 **Save and Deploy**
2. 等待 2-3 分鐘，Cloudflare 會自動：
   - 拉取代碼
   - 安裝依賴
   - 構建項目
   - 部署到全球 CDN

### 5️⃣ 綁定自定義域名 pdzeng.com

部署完成後：

1. 在項目頁面，點擊 **Custom domains**
2. 點擊 **Set up a custom domain**
3. 輸入 `pdzeng.com`
4. Cloudflare 會自動配置 DNS（因為域名已在 Cloudflare）
5. 等待 1-2 分鐘，DNS 生效

**可選**：同時添加 `www.pdzeng.com`
- 重複上述步驟，添加 `www.pdzeng.com`
- Cloudflare 會自動重定向 www 到主域名

---

## 🔄 自動部署

配置完成後，每次您推送代碼到 GitHub：

```bash
git add .
git commit -m "Update content"
git push
```

Cloudflare Pages 會**自動**：
1. 檢測到推送
2. 重新構建網站
3. 部署新版本
4. 通常 2-3 分鐘內完成

---

## ✅ 驗證部署

部署完成後，訪問：
- https://pdzeng.com
- 應該能看到您的白色現代風格 CV 網站！

---

## 🎨 優化建議

### 1. 添加網站圖標 (Favicon)
在 `public/` 目錄添加 `favicon.ico`

### 2. 添加 OG 圖片（社交分享）
創建 `public/og-image.png` (1200x630px)

更新 `src/app/layout.tsx`：
```typescript
export const metadata: Metadata = {
  // ... 現有配置
  openGraph: {
    images: ['/og-image.png'],
  },
}
```

### 3. 添加 Analytics（可選）
- Cloudflare Web Analytics（免費，隱私友好）
- Google Analytics
- Vercel Analytics

---

## 🔧 故障排除

### 構建失敗？
檢查構建日誌，常見問題：
- Node 版本不匹配 → 設置為 18 或 20
- 依賴安裝失敗 → 檢查 package.json

### 域名無法訪問？
1. 確認 DNS 已生效（可能需要等待幾分鐘）
2. 檢查 Cloudflare DNS 設置
3. 清除瀏覽器緩存

### 樣式錯亂？
1. 確保 Tailwind CSS 正確配置
2. 檢查構建日誌是否有警告
3. 清除 Cloudflare 緩存（在 Pages 項目設置中）

---

## 📞 需要幫助？

- [Cloudflare Pages 文檔](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)

---

**部署成功後，您的網站將在全球 200+ 數據中心運行，完全免費！** 🎉
