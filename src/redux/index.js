import { combineReducers, createStore } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../history';
import todoListReducer, { MODULE_NAME as todoListModule } from './todo-list.reducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    [todoListModule]: todoListReducer
});


const store = createStore(
    createRootReducer(history)
);

export default store;
