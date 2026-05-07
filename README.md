<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  # 雙班對抗賽計時器 ⏱️
  ### 專業級雙軌競賽同步計時系統
  
  [![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  [查看專案](https://ai.studio/apps/e4b8d56a-0025-413c-b1ce-59d75286ef79)
</div>

---

## 📖 簡介

**雙班對抗賽計時器** 是一款專為班際比賽、運動會或任何需要「兩組同時對抗」場景設計的專業計時系統。介面採用沉浸式硬體風格設計，結合動態溢光效果與數位顯示，為您的賽事增添科技感與公平性。

## ✨ 核心特色

- 🏎️ **雙軌獨立計時**：Sector 01 與 Sector 02 獨立控制，互不干擾。
- 💎 **沉浸式設計**：高品質硬體風格介面，搭配動態 HSL 顏色溢光與微動畫。
- ⚡ **即時監控**：低延遲 (Low Latency) 計時邏輯，確保競賽公平。
- 📱 **全平台支援**：響應式佈局，完美適配手機、平板與桌上型電腦。
- 🛠️ **一鍵重設**：快速初始化計時狀態，準備下一場賽事。

## 🚀 技術棧

- **框架**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **樣式**: [Tailwind CSS 4](https://tailwindcss.com/)
- **動畫**: [Framer Motion](https://motion.dev/)
- **圖標**: [Lucide React](https://lucide.dev/)
- **語言**: [TypeScript](https://www.typescriptlang.org/)

## 🛠️ 本地開發

### 前置準備
- 已安裝 [Node.js](https://nodejs.org/) (建議 v18 以上)

### 安裝步驟

1. **克隆專案並安裝依賴**
   ```bash
   npm install
   ```

2. **設定環境變數**
   在根目錄創建 `.env.local` 文件，並填入您的 Google AI API Key：
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```
   瀏覽器開啟 `http://localhost:3000` 即可看到效果。

## 📄 授權協議

本專案採用 [Apache License 2.0](LICENSE) 授權。
