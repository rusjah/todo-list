import { connect } from 'react-redux';
import React from 'react';

import './styles.css';
import { changeTodoStatusAction } from '../../../redux/todo-list.reducer';
import { Layout } from "../../layout/Layout";
import { MODULE_NAME as todoListModule } from '../../../redux/todo-list.reducer';

class TodoListPage extends React.Component {
    static propTypes = {};

    handleClick = (todoId) => {
        this.props.changeTodoStatusAction(todoId);
    }

    render() {
        const { todoList } = this.props;
        todoList.sort((a, b) => {
            if (a.status === b.status) {
                if (a.todo.toLowerCase() === b.todo.toLowerCase()) {
                    return 0;
                }
                return a.todo.toLowerCase() > b.todo.toLowerCase() ? 1 : -1;
            }
            return a.status > b.status ? 1 : -1;
        });
        return (
            <Layout>
                <h1>Todo List:</h1>
                <ul>
                    {todoList.map(todo => (
                        <li className={todo.status && 'done'} key={todo.id} onClick={() => this.handleClick(todo.id)}>
                            {todo.todo}
                        </li>
                    ))}
                </ul>
            </Layout >
        )
    }
}

export default connect(
    state => ({
        todoList: state[todoListModule].todoList
    }),
    { changeTodoStatusAction }
)(TodoListPage);
