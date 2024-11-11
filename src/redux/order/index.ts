import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Order, OrderState } from './types';
// import { BASE_URL } from '../../utils';
// const secretKey = process.env.REACT_APP_SECRET_KEY_API;
import dotenv from 'dotenv';
dotenv.config();

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
    const response = (await axios.post(process.env.PORT_SERVER + '/admin/orders', object)).data;
    return response;
});

//получение отзывов
export const getOrders = createAsyncThunk('orders/get', async () => {
    const response = (await axios.get(process.env.PORT_SERVER + '/admin/orders/get')).data;
    return response;
});

// Получение данных заявок из API
export const getOrdersJson = createAsyncThunk('api/getOrders', async () => {
    try {
        const response = await axios.get(`${process.env.PORT_SERVER}/api`);
        return response.data; // Возвращаем данные
    } catch (error) {
        // Обработка ошибок
        throw new Error(error.response ? error.response.data : 'Ошибка сети');
    }
});

//удаление отзыва
export const deleteOrder = createAsyncThunk('order/delete', async (id: String) => {
    const response = await axios.delete(process.env.PORT_SERVER + `/admin/order/delete${id}`);
    const data = response.data;
    if (!data.ok) {
        throw new Error('Ошибка в удалении автосалона');
    }
    return id;
});

export const { actions } = orderSlice;
export default orderSlice.reducer;
