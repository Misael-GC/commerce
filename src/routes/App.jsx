import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Recoverypassword from '../containers/RecoveryPassword';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="recovery-password" component={Recoverypassword} />
                <Route component={NotFound} />
            </Layout>
        </Switch>
    </BrowserRouter>
    );
}
// a esto nos referimos
export default App;