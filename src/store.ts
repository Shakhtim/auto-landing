import { createStore } from 'redux';
import rootReducer from './redux/auto/index.ts';

const store = createStore(rootReducer);

export default store;