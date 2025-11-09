# 🚀 部署到 Vercel + 綁定 pdzeng.com

## 🎯 為什麼選擇 Vercel？

- ✅ **完全免費**（Hobby 計劃）
- ✅ **專為 Next.js 優化**（Vercel 是 Next.js 的開發公司）
- ✅ **零配置**（自動檢測設置）
- ✅ **無文件大小限制**
- ✅ **全球 CDN + 邊緣網絡**
- ✅ **自動 HTTPS**
- ✅ **支持自定義域名** pdzeng.com
- ✅ **每次 Git push 自動部署**

---

## 📋 部署步驟（10 分鐘完成）

### 1️⃣ 推送代碼到 GitHub

如果還沒推送：

```bash
# 在 GitHub 創建新倉庫（https://github.com/new）
# 倉庫名稱：personal-cv（或任何名稱）
# 類型：Public 或 Private 都可以

# 連接到您的 GitHub 倉庫
git remote add origin https://github.com/你的用戶名/personal-cv.git

# 推送代碼
git push -u origin main
```

### 2️⃣ 註冊/登入 Vercel

1. 訪問 https://vercel.com/signup
2. 選擇 **Continue with GitHub**
3. 授權 Vercel 訪問 GitHub

### 3️⃣ 導入項目

1. 登入後，點擊 **Add New...** → **Project**
2. 在 **Import Git Repository** 區域找到您的 `personal-cv` 倉庫
3. 點擊 **Import**

### 4️⃣ 配置項目（自動檢測，通常不需要修改）

Vercel 會自動檢測到 Next.js 項目：

| 設置項 | 自動值 |
|--------|--------|
| **Framework Preset** | Next.js |
| **Root Directory** | `./` |
| **Build Command** | `next build` |
| **Output Directory** | `.next` |
| **Install Command** | `npm install` |

✅ **直接點擊 Deploy** 即可！

### 5️⃣ 等待部署完成

- 第一次部署約 1-2 分鐘
- Vercel 會顯示實時構建日誌
- 完成後會看到 🎉 慶祝畫面！

### 6️⃣ 獲取臨時 URL

部署完成後，Vercel 會給您一個臨時域名：
- `https://你的項目名.vercel.app`
- 可以先訪問確認網站正常運行

---

## 🌐 綁定自定義域名 pdzeng.com

### 步驟 A：在 Vercel 添加域名

1. 在項目頁面，點擊 **Settings** 標籤
2. 左側選單選擇 **Domains**
3. 在輸入框輸入 `pdzeng.com`
4. 點擊 **Add**

### 步驟 B：配置 DNS（在 Cloudflare）

Vercel 會顯示需要添加的 DNS 記錄。

#### 方案 1：A 記錄（推薦）

在 Cloudflare DNS 設置中添加：

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| **A** | `@` | `76.76.21.21` | 關閉（DNS only） |

#### 方案 2：CNAME 記錄

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| **CNAME** | `@` | `cname.vercel-dns.com` | 關閉（DNS only） |

**重要**：
- ⚠️ 代理（Proxy）必須設為 **DNS only**（灰色雲朵）
- ⚠️ 如果開啟橘色雲朵（Proxied），會導致 SSL 證書錯誤

#### 可選：添加 www 子域名

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| **CNAME** | `www` | `cname.vercel-dns.com` | DNS only |

### 步驟 C：等待 DNS 生效

- 通常 1-5 分鐘
- 最長可能需要 24 小時
- 可以使用 https://dnschecker.org 檢查

### 步驟 D：在 Vercel 驗證域名

1. 返回 Vercel 項目的 **Domains** 頁面
2. 等待域名狀態變為 ✅ **Valid**
3. SSL 證書會自動配置（免費）

---

## 🔄 自動部署工作流程

配置完成後，開發流程變得超級簡單：

```bash
# 1. 修改代碼
# 編輯 src/data/content.ts 更新內容

# 2. 提交並推送
git add .
git commit -m "Update content"
git push

# 3. 自動部署！
# Vercel 自動檢測推送 → 構建 → 部署
# 1-2 分鐘後新版本上線
```

### 部署預覽

- **Production**：推送到 `main` 分支 → 自動部署到 pdzeng.com
- **Preview**：推送到其他分支 → 生成預覽 URL，不影響生產環境

---

## ✅ 驗證部署

部署並配置 DNS 後：

1. 訪問 https://pdzeng.com
2. 檢查 HTTPS 是否正常（應該顯示🔒）
3. 測試所有頁面和功能

---

## 🎨 後續優化

### 1. 環境變量（如果需要）

在 Vercel 項目設置中：
- **Settings** → **Environment Variables**
- 添加敏感信息（API Keys 等）

### 2. 性能分析

Vercel 自動提供：
- **Analytics**：訪問統計
- **Speed Insights**：性能指標
- **Web Vitals**：用戶體驗數據

### 3. 添加 Favicon

確保 `public/favicon.ico` 存在

### 4. 添加 OG 圖片

創建 `public/og-image.png` (1200x630px)
更新 `src/app/layout.tsx`：

```typescript
export const metadata: Metadata = {
  openGraph: {
    images: ['/og-image.png'],
  },
}
```

---

## 🔧 常見問題

### Q: DNS 配置後域名無法訪問？
**A:**
1. 確認 Cloudflare 代理設為 **DNS only**（灰色雲朵）
2. 等待 DNS 傳播（1-5 分鐘）
3. 清除瀏覽器緩存

### Q: SSL 證書錯誤？
**A:**
1. 確保 Cloudflare SSL/TLS 設為 **Full** 或 **Full (strict)**
2. 關閉 Cloudflare 代理（設為 DNS only）
3. 等待 Vercel 重新簽發證書

### Q: 構建失敗？
**A:**
1. 檢查 Vercel 構建日誌
2. 確保本地 `npm run build` 成功
3. 檢查 Node 版本（Vercel 默認使用 Node 18）

### Q: 如何回滾到舊版本？
**A:**
1. Vercel 項目頁面 → **Deployments**
2. 找到想要的版本
3. 點擊 **...** → **Promote to Production**

---

## 💰 費用說明

**完全免費！**

Vercel Hobby 計劃包含：
- ✅ 無限網站
- ✅ 無限部署
- ✅ 100GB 帶寬/月（足夠個人網站）
- ✅ 無限自定義域名
- ✅ 自動 HTTPS
- ✅ 全球 CDN

---

## 📞 需要幫助？

- [Vercel 文檔](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [自定義域名](https://vercel.com/docs/concepts/projects/domains)

---

## 🎉 成功後

您的網站將：
- 在 https://pdzeng.com 上線
- 享受全球 CDN 加速
- 自動 HTTPS
- 每次推送自動更新
- 完全免費運行！

**享受您的現代白色 CV 網站吧！** ✨
