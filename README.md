# hahow-frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

這是一個 [Hahow 前端測驗](https://github.com/hahow/hahow-recruit/blob/d9fbdc22adaeda36ecc5ed1a781c72e8f4f0866e/frontend.md)的實作。

## 該如何執行完成的 package

### 在本機執行 development server

1. 把這個 repository clone 到要執行的電腦上
2. `cd hahow-frontend`
3. `yarn`
4. `yarn dev`
5. 使用瀏覽器開啟 <http://localhost:3000/heroes>

### 瀏覽正式部署的結果

1. 使用瀏覽器開啟 <https://hahow-frontend.vercel.app/heroes/>

## 專案的架構、Web 的架構邏輯

專案檔案架構如下：

### `pages`

next.js 會自動將 pages 內的檔案轉換為 routing，因此 `/heroes` 會使用 `heroes.tsx`、而 `/heroes/:heroId` 會使用 `heroes/[heroId].tsx`。

### `components`

存放所使用的 react components，其中 `HeroPage.tsx` 就是兩個 route 都會使用的頁面內容。`ProfilePanel` 內則是點進單一 hero 的時候所顯示的數值面板。

### `public`

存放靜態檔案，此專案中僅使用 `loading.png`。

## 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

### axios

提供 promise 封裝的 HTTP request client，個人覺得使用起來比瀏覽器的 fetch API 方便一些。

### next

方便開發和部署 react 的框架，提供 server-side rendering 支援、動態 routing 等功能。

### react / react-dom

react 本體以及讓 react 可以 render 到瀏覽器上。

### react-query

提供 API call 的狀態和快取管理，會自動處理 refetch 和 cache 等等。

### styled-components / babel-plugin-styled-components

css-in-js 的解決方案之一，會把定義的 styles 轉換成特殊的 class name 之後再附加到 HTML 上。

### @types/*

沒有提供原生 TypeScript 支援的套件可以安裝社群維護的 TypeScript 定義。

### @typescript-eslint/eslint-plugin

提供 TypeScript 相關的 ESLint rules 定義，以使用 `@typescript-eslint/no-unused-vars`。

### eslint* / prettier

執行 lint，檢查語法有無錯誤，再搭配 prettier 可以自動完成統一風格的程式碼排版。

### typescript

將 TypeScript 編譯成 JavaScript 以便在瀏覽器執行。

## 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

大部分情形應該將程式碼直接寫得語意足夠完整，因此可以減少直接解釋程式碼運作的註解，讓程式碼自己說話。但仍然有情況是註解可以幫助理解或是提供標記，例如：

- `// FIXME:`、`// TODO:` 理論上應該要盡速修復讓這些註解不再存在，但由於時間等問題可能無法馬上解決的問題，需要標記讓其他人知道問題，還可以適度搭配編輯器套件醒目提示
- 如果有參考資料，例如使用套件時的 configuration，或是專案定義的複雜運算流程等特殊需求，可以附上參考的文件連結
- 如果是開發套件或是 utility 供他人使用，加上適當格式的註解可以讓編輯器自動出現提示

## 在這份專案中你遇到的困難、問題，以及解決的方法

因為是第一次使用 `react-query`，在習慣他的 cache 和 refetch 機制時花了一點時間，最後有參考官方文件找到更多的 state 來作為檢查的標的，改善切換 heroId 時的體驗。

在 react-query 的 mutation function 中要取用 error 時發現 type 未定義，先嘗試加入 template 前兩個參數(後來知道是 TData、TError)發現會造成 type error，後來確認原始碼才發現應該要多使用第三個參數 TVariables。
