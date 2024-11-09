import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <aside className="admin-sidebar">
            <nav>
                <ul>
                    <li>
                        <i className="fas fa-building" aria-hidden="true"></i>
                        <Link to="/admin/setting">Настройки</Link>
                    </li>
                    <li>
                        <i className="fa fa-comments" aria-hidden="true"></i>
                        <Link to="/admin/orders">Заявки</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
