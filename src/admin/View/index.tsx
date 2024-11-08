import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { selectIsAuthenticated, logoutAdmin } from '../../redux/admin';
import './View.scss';
import { Button } from '@mui/material';
// import LogoutIcon from '@mui/material/Logout';

import SideBar from '../Components/SideBar';
import { AppDispatch } from '../../store';

const AdminMain = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const handleLogout = () => {
        dispatch(logoutAdmin());
        navigate('/auth'); // Перенаправляем на страницу входа
    };

    if (!isAuthenticated) {
        return <Navigate to="/auth" />;
    }

    const currentPath = location.pathname;

    return (
        <section className="adminMain">
            <div className="adminMain__panel">
                <div className="container">
                    <Link to="/admin">
                        <h1>Админ</h1>
                    </Link>
                    <Button variant="contained" endIcon={''} onClick={handleLogout}>
                        Выйти
                    </Button>
                </div>
            </div>
            <div className="adminMain__content">
                <div className="container">
                    <SideBar></SideBar>
                    <div className="adminMain__content-info">
                        {currentPath === '/admin' && <h3>Главная страница админа</h3>}
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminMain;
