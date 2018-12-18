import { connect } from "react-redux";
import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './routes/HomePage';
import TodoListPage from './routes/TodoListPage'
import CreateTodoListPage from './routes/CreateTodoListPage'

function Root() {
    return (
        <div>
            <Route path="/create-todo" component={CreateTodoListPage} />
            <Route path="/todo-list" component={TodoListPage} />
            <Route exact path="/" component={HomePage} />
        </div>
    );
}

Root.propTypes = {
};

export default connect(
    null,
    null,
    null,
    { pure: false }
)(Root);
