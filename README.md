# 🔗 Codi-Client

### Say goodbye to boring memorization - Codi's flashcard-based platform makes learning to code a fun and seamless experience with progress tracking to keep you motivated.

[🔗 Live Version](https://codi-app.netlify.app/) | [Live API](codi-api-production.up.railway.app) |
[Codi API Repo](https://github.com/PavelKotlov/codi-api)

[![made-with-Node](https://img.shields.io/badge/Made%20with-Node.js%20-success)](https://nodejs.org/en/)
[![made-with-MUI](https://img.shields.io/badge/Made%20with-MUI%20-blue)](https://MUI.com/)
[![made-with-Auth0](https://img.shields.io/badge/Made%20with-Auth0%20-critical)](https://Auth0.com/)
[![made-with-Axios](https://img.shields.io/badge/Made%20with-Axios%20-blue)](https://Axios.com/)
[![made-with-React](https://img.shields.io/badge/Made%20with-React%20-blue)](https://React.com/)
[![made-with-Echarts](https://img.shields.io/badge/Made%20with-Echarts%20-blueviolet)](https://echarts.apache.org/en/index.html)
[![made-with-AceEditor](https://img.shields.io/badge/Depolyed%20on-AceEditor%20-blue)](https://ace.c9.io/)
[![made-with-react-calendar-heat-map](https://img.shields.io/badge/Depolyed%20on-React%20Calendar%20Heatmap-blueblueviolet)](https://www.npmjs.com/package/react-calendar-heatmap)
[![made-with-Netlify](https://img.shields.io/badge/Depolyed%20on-Netlify%20-blueviolet)](https://Netlify.com/)

## Table of Content

- [🔗 Codi-Client](#-codi-client)
    - [Say goodbye to boring memorization - Codi's flashcard-based platform makes learning to code a fun and seamless experience with progress tracking to keep you motivated.](#say-goodbye-to-boring-memorization---codis-flashcard-based-platform-makes-learning-to-code-a-fun-and-seamless-experience-with-progress-tracking-to-keep-you-motivated)
  - [Table of Content](#table-of-content)
  - [📷 Thumbnails](#-thumbnails)
  - [🌟 Features](#-features)
  - [🚀 Getting Started](#-getting-started)
  - [🧱 Main Structure](#-main-structure)
  - [📦 Tech Stack (Dependencies)](#-tech-stack-dependencies)
  - [🔨 contributors](#-contributors)
  - [⚠️ Disclaimer](#️-disclaimer)

## 📷 Thumbnails

## 🌟 Features

- Topics Panel:
  ![Topics Panel]()

- Flashcard management: users can manage flashcards for a specific topic.

- Study Session:
  ![Flashcard Quiz]()

- **Automation**

  - Concept Cards: Users can generate flashcard automatically by pasting in a study note into the auto section of create new concept card.
  - Exercise Cards: Users can generate one exercise card automatically by checking the Auto generate exercise checkbox in either create new concept card view or edit a concept card view.

- **Analytics**

  - Topic statistics: users can review statistics for a specific topic, such as the total number of flashcards, the number of flashcards in each status, and the number of flashcard reviews grouped by date.
    ![Topic Dashboard]()

- **Security:**
  - The API requires authentication through Auth0 to access any of its endpoints.
  - Users can only access topics and flashcards they own.

---

## 🚀 Getting Started

1. Refer to [Codi API Repo](https://github.com/PavelKotlov/codi-api) for installation or refactor files to connect to [Live Codi API](codi-api-production.up.railway.app).
2. Clone it <br>
   `git clone https://github.com/PavelKotlov/codi-client`
3. Navigate to the repo<br>
   `cd codi-client`
4. Install all the depndencies <br>
   `npm install`
5. Sign up with Auth0. Add `http://localhost:[PORT]` link to Allowed Callback URLs, Allowed Logout URLs, and Allowed Web Origins. Add `https://[app-name.us].auth0.com/authorize` to Application Login URI.
6. Create a .env file according to the template below

   ```sh
   REACT_APP_AUTH0_CLIENT_ID=
   REACT_APP_AUTH0_DOMAIN=
   REACT_APP_AUTH0_AUDIANCE=
   ```

7. Run the server

   ```sh
   npm start
   ```

---

## 🧱 Main Structure

```sh
├── docs                       # screenshots and gifs for readme
├── public
│  └── assets                  # contains static assets like images
├── src
│  ├── components              # reusable UI components
│  ├── helpers                 # utility functions
│  ├── pages                   # components representing each page in the app
│  ├── providers               # contexts and providers
│  └── routes                  # routing components
├─── netlify.toml              # netlify configuration
├─── package-lock.json
├─── package.json
└─── README.md

```

---

## 📦 Tech Stack (Dependencies)

- [React](https://react.dev/)
- [React Dom](https://legacy.reactjs.org/docs/react-dom.html)
- [React Router dom](https://reactrouter.com/en/main)
- [React Scripts](https://www.npmjs.com/package/react-scripts)
- [mui/material](https://MUI.com/)
- [mui/icons-material](https://MUI.com/)
- [Axios](https://Axios.com/)
- [auth0](https://Auth0.com/)
- [React Ace](https://ace.c9.io/)
- [Echarts for React](https://echarts.apache.org/en/index.html)
- [React calendar heatmap](https://www.npmjs.com/package/react-calendar-heatmap)
- [React code blocks](https://www.npmjs.com/package/react-code-blocks)
- [classnames](https://www.npmjs.com/package/classnames)
- [React tooltip](https://www.npmjs.com/package/react-tooltip)

## 🔨 contributors

- PavelKotlov @PavelKotlov
- Juliana Mochizuki @jkmochizuki
- Shorouk Abdelaziz @ShoroukAziz

## ⚠️ Disclaimer

- This is a project for [LHL web development bootcamp](https://www.lighthouselabs.ca/) and is not meant for production use

<img src="https://camo.githubusercontent.com/7dd59506447a5060c5df4ab9da2c7a3fefcb0e1cd86ba40d31a45666bc98e6e0/687474703a2f2f466f7254686542616467652e636f6d2f696d616765732f6261646765732f6275696c742d776974682d6c6f76652e737667"/>

[⬆ Go to beginning](#Codi-Client)
