import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./routes/App";
import Cards from "./pages/cards";
import Dashboard from "./pages/dashboard";
import Quiz from "./pages/quiz";
import Topics from "./pages/topics";
import ErrorPage from "./error-page";
import { ThemeProvider } from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";
import TopicProvider from "./providers/TopicProvider";
import codiTheme from "./codi-theme";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/topics", element: <Topics />, errorElement: <ErrorPage /> },
  {
    path: "/topics/:topic_id/dashboard",
    element: (
      <TopicProvider>
        <Dashboard />
      </TopicProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/topics/:topic_id/quiz",
    element: (
      <TopicProvider>
        <Quiz />
      </TopicProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/topics/:topic_id/cards",
    element: (
      <TopicProvider>
        <Cards />
      </TopicProvider>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={codiTheme}>
      <Auth0Provider
        domain="codi-app.us.auth0.com"
        clientId="kUnewKRYTn8WKgrG1zJ7ADD9akcDAarQ"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>,
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
