import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';

import './style.css';

class Header extends Component {

    static propTypes = {
    };

    render() {
        return (
            <header className="header">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/todo-list" className="nav-link">Todo List</NavLink>
                <NavLink to="/create-todo/" className="nav-link">Create Todo</NavLink>
            </header>
        );
    }
}

export default Header;
