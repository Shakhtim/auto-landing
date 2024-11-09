import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Order, OrderState } from './types';
import { BASE_URL } from '../../utils';
// import dotenv from 'dotenv';
// dotenv.config({ path: '../../server/.env' });
const secretKey = process.env.REACT_APP_SECRET_KEY_API;
console.log(secretKey);

const initialState: OrderState = {
    orders: [] as Order[],
    status: 'idle',
    loading: false,
    error: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createOrder.fulfilled, (state, action) => {
                state.orders.push(action.payload);
            })
            .addCase(getOrders.pending, state => {
                state.status = 'loading';
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(getOrders.rejected, state => {
                state.status = 'failed';
            })
            .addCase(getOrdersJson.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = state.orders.filter(order => order.id !== action.payload);
            });
    },
});

//создание отзыва
export const createOrder = createAsyncThunk('order/create', async (object: Order) => {
    const response = (await axios.post(BASE_URL + '/admin/orders', object)).data;
    return response;
});

//получение отзывов
export const getOrders = createAsyncThunk('orders/get', async () => {
    const response = await axios.get(BASE_URL + '/admin/orders/get');
    return response.data;
});

// Получение данных заявок из API
export const getOrdersJson = createAsyncThunk('api/getOrders', async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api`);
        return response.data; // Возвращаем данные
    } catch (error) {
        // Обработка ошибок
        throw new Error(error.response ? error.response.data : 'Ошибка сети');
    }
});

//удаление отзыва
export const deleteOrder = createAsyncThunk('order/delete', async (id: String) => {
    const response = await axios.delete(BASE_URL + `/admin/order/delete${id}`);
    const data = response.data;
    if (!data.ok) {
        throw new Error('Ошибка в удалении автосалона');
    }
    return id;
});

export const { actions } = orderSlice;
export default orderSlice.reducer;
