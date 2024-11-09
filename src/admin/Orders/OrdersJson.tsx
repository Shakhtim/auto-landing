import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersJson } from '../../redux/order'; // Предположим, что этот экшен получает данные из API
import { AppDispatch, RootState } from '../../store';
const OrdersComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { orders, loading, error } = useSelector((state: RootState) => state.order);
    useEffect(() => {
        dispatch(getOrdersJson());
    }, [dispatch]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    // Преобразуем данные в нужный формат
    const formattedOrders = orders.map(order => ({
        source_object_id: order.id, // Используем id как source_object_id
        source_object_class: 'feedback', // Статическое значение
        type: order.type,
        client_phone_number: order.phone,
        roistat: order.yclid, // Предполагаем, что yclid используется как roistat
        client_last_name: order.name || null, // Если last name отсутствует, возвращаем null
        client_ip: order.ip,
        client_id: order.id, // Если у вас есть отдельное поле client_id, замените это значение
        car_brand: order.brand || null,
        car_model: order.model || null,
        car_price: null, // Если у вас нет этого поля, возвращаем null
        entry_point: order.entryPoint,
        created_at: new Date(order.dateCreated).toISOString().slice(0, 19).replace('T', ' '), // Форматирование даты
    }));
    // Отображаем массив объектов в виде JSON
    return (
        <div style={{ background: '#fff' }}>
            <pre>{JSON.stringify(formattedOrders, null, 2)}</pre> {/* Отображаем отформатированные данные */}
        </div>
    );
};
export default OrdersComponent;
