import React from 'react';

import './styles.css';
import {Layout} from "../../layout/Layout";

class HomePage extends React.Component {
    static propTypes = {};

    render() {
        return (
            <Layout>
                <h1>Home Page!</h1>
            </Layout>
        )
    }
}

export default HomePage;
