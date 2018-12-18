import { todoList } from '../fixtures';
export const MODULE_NAME = 'TODO-LIST';

export const CREATE_TODO = `${MODULE_NAME}/CREATE_TODO`;
export const CHANGE_TODO_STATUS = `${MODULE_NAME}/CHANGE_TODO_STATUS`;

export const createTodoAction = (value) => {
    return {
        type: CREATE_TODO,
        payload: value
    };
}

export const changeTodoStatusAction = (id) => {
    return {
        type: CHANGE_TODO_STATUS,
        payload: id
    };
}

export default function reducer(state = { todoList }, action) {
    const { payload, type } = action;

    switch (type) {
        case CREATE_TODO:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: Date.now(),
                        todo: payload,
                        status: 0
                    }
                ]
            };

        case CHANGE_TODO_STATUS:
            return {
                ...state,
                todoList: [
                    ...state.todoList
                ].map(todo => {
                    if (todo.id === payload) {
                        todo.status = todo.status ? 0 : 1;
                    }
                    return todo;
                })
            };

        default:
            return state;
    }
}
