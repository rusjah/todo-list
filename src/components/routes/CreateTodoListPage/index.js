import { connect } from 'react-redux';
import React from 'react';

import './styles.css';
import { createTodoAction } from '../../../redux/todo-list.reducer';
import { Layout } from "../../layout/Layout";

class CreateTodoListPage extends React.Component {
    static propTypes = {};

    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value.trim() });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.value) {
            this.props.createTodoAction(this.state.value);
            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <Layout>
                <h1>Create New Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </Layout>
        )
    }
}

export default connect(
    null,
    { createTodoAction }
)(CreateTodoListPage);
