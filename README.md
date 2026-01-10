# Health News App

A small React application that fetches and displays health-related articles from a news provider. The app includes a category selector, dark mode toggle, and a simple bookmarking UI.

---

## 🚀 Features

- **Category selection:** Choose health-related categories (Health, Fitness, Nutrition, Diet, Lifestyle, Meditation).
- **Dark mode:** Toggle between light and dark themes.
- **Bookmarking:** Temporarily bookmark articles during a session.
- **External news:** Articles fetched from a third-party API (e.g., NewsAPI).

---

## 🧰 Tech Stack

- React (v18)
- react-scripts (Create React App)
- Browser Fetch API for network requests

---

## ✅ Quick Start

### Prerequisites

- Node.js >= 14
- npm or yarn

### Install

```bash
git clone https://github.com/PapunPal/health-news-app.git
cd health-news-app
npm install
```

### Environment variables

For security, **do not commit API keys**. Create a `.env` file in the project root with:

```env
REACT_APP_NEWS_API_KEY=your_news_api_key_here
```

> Note: The current implementation stores a key in `src/newsService.js`. It is recommended to rotate that key and update the code to use `process.env.REACT_APP_NEWS_API_KEY` instead. Example:

```js
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
```

### Run locally

```bash
npm start
```

Open http://localhost:3000 to view the app.

### Build for production

```bash
npm run build
```

---

## 🗂 Project Structure

- `src/` — source files
  - `App.js` — app shell and theme toggle
  - `newsService.js` — API calls (replace API key with env var)
  - `components/` — `NewsList`, `CategorySelector`, `Bookmark`

---

## 🛠️ Notes & Security

- **Important:** An API key is currently present in `src/newsService.js`. If this key is active, rotate it immediately and use an environment variable instead. Do not keep secrets in source code.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make changes and add tests where applicable
4. Open a pull request describing your changes

---

## 📝 License

Add a `LICENSE` file to specify the license (MIT recommended).

---

## 📬 Contact

Repository: https://github.com/PapunPal/health-news-app

If you want, I can also: add an `.env`-based implementation for `newsService.js`, remove the committed API key, and add a brief CONTRIBUTING.md — tell me which you'd like next. ✅
