import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}
// a esto nos referimos
export default App;