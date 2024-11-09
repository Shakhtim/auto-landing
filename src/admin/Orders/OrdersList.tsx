import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './View.scss';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { deleteOrder, getOrders } from '../../redux/order';
import { AppDispatch, RootState } from '../../store';

const CustomButtonAdd = styled(Button)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'darkgreen',
        color: '#fff',
    },
}));

const OrderList = () => {
    const dispatch: AppDispatch = useDispatch();
    const { orders, status, error } = useSelector((state: RootState) => state.order);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(25);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const handleDelete = async (id: String) => {
        if (window.confirm('Вы уверены, что хотите удалить этот отзыв?')) {
            try {
                await dispatch(deleteOrder(id));
            } catch (error) {
                console.error('Ошибка при удалении отзыв:', error);
            }
        }
    };

    // Определяем общее количество страниц
    const totalPages = Math.ceil(orders.length / itemsPerPage);

    // Определяем индекс первого и последнего элемента для текущей страницы
    const indexOfLastSalon = currentPage * itemsPerPage;
    const indexOfFirstSalon = indexOfLastSalon - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstSalon, indexOfLastSalon);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    // Обработчик изменения количества элементов на странице
    const handleItemsPerPageChange = event => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Сброс страницы на первую при изменении количества элементов
    };

    // Обработка состояния загрузки и ошибок
    if (status === 'loading') {
        return <div>Загрузка...</div>;
    }

    if (status === 'failed') {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <section className="adminOrders">
            <div className="adminOrders__header">
                <h5>Список отзывов</h5>
                {/* <CustomButtonAdd variant="contained" href="/admin/autosalons/create" color="success">
                    Добавить
                </CustomButtonAdd> */}
            </div>
            <div className="adminOrders__body">
                <div className="pagination-top">
                    <div className="itemsPerPage">
                        <label htmlFor="itemsPerPage">Элементов на странице: </label>
                        <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <table className="table-bordered table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Дата создания</td>
                            <td>Имя</td>
                            <td>Телефон</td>
                            <td>IP</td>
                            <td>Марка</td>
                            <td>Модель</td>
                            <td>Конфигурация</td>
                            <td>Перв. взнос</td>
                            <td>Срок займа</td>
                            <td>Точка входа</td>
                            <td>YCID</td>
                            <td>Тип</td>
                            <td>Действия</td>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map(order => (
                            <tr key={order.id}>
                                <td id="orderId">{order.id}</td>
                                <td id="orderDateCreated">
                                    <div>{new Date(order.dateCreated).toLocaleDateString()}</div>
                                    <div style={{ fontSize: 'small', color: '#666' }}>{new Date(order.dateCreated).toLocaleTimeString()}</div>
                                </td>
                                <td id="orderName">{order.name}</td>
                                <td id="orderPhone">{order.phone}</td>
                                <td id="orderIp">{order.ip}</td>
                                <td id="orderBrand">{order.brand}</td>
                                <td id="orderModel">{order.model}</td>
                                <td id="orderConfiguration">{order.configuration}</td>
                                <td id="orderFirstPayment">{order.firstPayment}</td>
                                <td id="orderLoanTerm">{order.loanTerm}</td>
                                <td id="orderEntryPoint">{order.entryPoint}</td>
                                <td id="orderYclid">{order.yclid}</td>
                                <td id="orderType">{order.type}</td>
                                <td id="orderAction">
                                    <Link to={`/admin/order/edit/${order.id}`} title="Изменить">
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Link>
                                    <button title="Удалить" onClick={() => handleDelete(order.id)}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default OrderList;
