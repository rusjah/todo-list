import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './style.css';
import Header from "../Header";

export class Layout extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired,
    };

    render() {
        const {children} = this.props;
        return (
            <div className="container">
                <Header className="header"/>
                <div className="main">
                    {children}
                </div>
            </div>
        );
    }
}
