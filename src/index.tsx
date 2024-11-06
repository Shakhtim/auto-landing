import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.tsx';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store.ts';
import Layout from './pages/Layout/index.tsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("no-js") as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);