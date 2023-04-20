import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './routes/App';
import Dashboard from './pages/Dashboard';
import TopicProvider from './providers/TopicProvider';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/topics/:topic_id/dashboard',
    element: (
      <TopicProvider
        id='8e3399e6-1d94-11ec-9621-0242ac130002'
        name='JavaScript'>
        <Dashboard />
      </TopicProvider>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
