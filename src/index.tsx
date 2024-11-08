import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store';
import Layout from './pages/Layout/index';
import AdminMain from './admin/View/index';
import PrivateRoute from './components/PrivateRoute/index';
import Auth from './admin/Auth';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/auth',
                element: <Auth />,
            },
        ],
    },
    {
        path: '/admin',
        element: <PrivateRoute element={<AdminMain />} />,
        children: [{}],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('no-js') as HTMLElement);
root.render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
);
