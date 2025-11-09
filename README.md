# 🐼 Panda Tseng - Personal CV Website

一個基於 Next.js 的個人 CV 網站，採用現代白色極簡設計風格，展示個人品牌、專業經歷與競賽成就。

## ✨ 特色功能

- 🎨 **現代白色設計**：純白背景 + 專業灰色系配色
- ⚡ **流暢動畫效果**：使用 Framer Motion 實現滾動動畫與互動效果
- 📱 **完全響應式**：適配桌面、平板和移動設備
- 🖋️ **打字機效果**：Hero Banner 的動態文字展示
- 🎯 **區塊化設計**：清晰的內容區塊（Hero, About, Experience, Projects, Achievements, Contact）
- 🔗 **社交連結整合**：一鍵連接到各大社交平台（Telegram, Twitter, LinkedIn, GitHub, Medium, Blog）
- 🌐 **中英混合**：內容為中文，導航保持英文

## 🛠️ 技術棧

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **圖標**: Lucide React
- **字體**: Inter, Space Grotesk, Noto Sans TC

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發服務器

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 構建生產版本

```bash
npm run build
```

### 啟動生產服務器

```bash
npm start
```

## 📝 自定義內容

所有內容數據都集中在 `src/data/content.ts` 文件中，您可以輕鬆修改：

- **個人信息**: `personalInfo` - 姓名、職稱、標語、簡介
- **關於我**: `about` - 自我介紹與重點特色
- **工作經歷**: `experiences` - 按時間倒序排列的工作經驗
- **精選專案**: `projects` - 主要項目作品（如 WalkinCat 走路貓自媒體）
- **競賽成就**: `achievements` - 按類別和時間排列的競賽獎項
- **教育背景**: `education` - 學歷信息
- **社交連結**: `socialLinks` - Email, Telegram, Twitter, LinkedIn, GitHub, Medium, Blog

## 🎨 自定義主題

主題配置在 `tailwind.config.ts` 中，包含：

- **背景色**: `#FFFFFF` (白色)
- **主要顏色**:
  - Black: `#000000`
  - Dark Gray: `#1F2937`
  - Gray: `#6B7280`
- **強調色**:
  - Light: `#F3F4F6`
  - Medium: `#E5E7EB`
  - Dark: `#9CA3AF`

## 📂 項目結構

```
personal-cv/
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局樣式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 主頁面
│   ├── components/          # React 組件
│   │   ├── Navbar.tsx       # 導航欄
│   │   ├── Hero.tsx         # 首屏 Banner
│   │   ├── About.tsx        # 關於我
│   │   ├── Experience.tsx   # 工作經歷（表格式）
│   │   ├── Projects.tsx     # 精選專案
│   │   ├── Achievements.tsx # 競賽成就
│   │   └── Contact.tsx      # 聯絡方式
│   └── data/
│       └── content.ts       # 內容數據（中文）
├── public/                  # 靜態資源
├── DEPLOYMENT.md            # Vercel 部署指南
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🌐 部署

### Vercel（推薦）

詳細部署步驟請參考 [DEPLOYMENT.md](./DEPLOYMENT.md)

1. 將代碼推送到 GitHub
2. 在 Vercel 上導入項目
3. Vercel 會自動檢測 Next.js 並完成部署
4. 綁定自定義域名（如 pdzeng.com）

### 其他平台

- **注意**: Cloudflare Pages 有 25 MiB 文件大小限制，不適合此項目
- 推薦使用 Vercel（無文件大小限制且為 Next.js 優化）

## 👤 關於 Panda Tseng

- **職位**: Co-Founder / 自媒體內容創作者
- **專注領域**: AI、生產力工具、Web3 與區塊鏈
- **自媒體**: WalkinCat 走路貓（主要活躍於 Instagram）
- **背景**: 資訊管理碩士，全端開發者，區塊鏈愛好者
- **經歷**: 自 2018 年投入加密貨幣領域

## 🏆 主要成就

- 國際區塊鏈奧林匹亞亞軍
- APP 移動應用創新賽 iOS 組冠軍
- 第六屆清華創業競賽區塊鏈組冠軍
- BTSC 京台青年創新創業大賽亞軍

## 🤝 聯繫方式

- **Email**: [panda@walkincat.org](mailto:panda@walkincat.org)
- **Telegram**: [@FinalFantasty](https://t.me/FinalFantasty)
- **Twitter**: [@pandazeng1](https://x.com/pandazeng1)
- **LinkedIn**: [Wei-Chieh Tseng](https://www.linkedin.com/in/wei-chieh-tseng-369303161/)
- **GitHub**: [@panda850819](https://github.com/panda850819)
- **Medium**: [@kiss851990](https://medium.com/@kiss851990)
- **Blog**: [blog.pdzeng.com](https://blog.pdzeng.com)

## 📄 授權

© 2025 Panda Tseng. 版權所有。

---

**使用 Next.js、Tailwind CSS 與 Framer Motion 打造 ✨**
