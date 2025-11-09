# 🐼 Panda Tseng - Personal CV Website

一個基於 Next.js 的個人 CV 網站，採用 Web3 未來感設計風格，展示個人品牌、專業技能與項目作品。

## ✨ 特色功能

- 🎨 **Web3 未來感設計**：深色背景 + 霓虹漸層色彩
- ⚡ **流暢動畫效果**：使用 Framer Motion 實現滾動動畫與互動效果
- 📱 **完全響應式**：適配桌面、平板和移動設備
- 🖋️ **打字機效果**：Hero Banner 的動態文字展示
- 🎯 **區塊化設計**：清晰的內容區塊（Hero, About, Experience, Projects, Skills, Contact）
- 🔗 **社交連結整合**：一鍵連接到各大社交平台

## 🛠️ 技術棧

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **圖標**: Lucide React
- **字體**: Inter, Space Grotesk, Noto Sans TC

## 🚀 快速開始

### 安裝依賴

\`\`\`bash
npm install
\`\`\`

### 啟動開發服務器

\`\`\`bash
npm run dev
\`\`\`

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 構建生產版本

\`\`\`bash
npm run build
\`\`\`

### 啟動生產服務器

\`\`\`bash
npm start
\`\`\`

## 📝 自定義內容

所有內容數據都集中在 \`src/data/content.ts\` 文件中，您可以輕鬆修改：

- **個人信息**: \`personalInfo\`
- **關於我**: \`about\`
- **工作經歷**: \`experiences\`
- **項目作品**: \`projects\`
- **技能**: \`skills\`
- **社交連結**: \`socialLinks\`

## 🎨 自定義主題

主題配置在 \`tailwind.config.ts\` 中，包含：

- **背景色**: \`#0B0B0F\`
- **主要漸層色**:
  - Cyan: \`#00D9FF\`
  - Purple: \`#B24BF3\`
  - Pink: \`#FF6EC7\`

## 📂 項目結構

\`\`\`
personal-cv/
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局樣式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 主頁面
│   ├── components/          # React 組件
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── data/
│       └── content.ts       # 內容數據
├── public/                  # 靜態資源
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
\`\`\`

## 🌐 部署

### Vercel（推薦）

1. 將代碼推送到 GitHub
2. 在 Vercel 上導入項目
3. Vercel 會自動檢測 Next.js 並完成部署

### 其他平台

也可以部署到 Netlify、Cloudflare Pages 等支持 Next.js 的平台。

## 📄 授權

本項目為個人使用，如需商用請聯繫作者。

## 🤝 聯繫方式

- Email: panda@example.com
- Twitter: [@pandatseng](https://twitter.com/pandatseng)
- LinkedIn: [Panda Tseng](https://linkedin.com/in/pandatseng)

---

**Built with ❤️ using Next.js, Tailwind CSS & Framer Motion**
