import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Recoverypassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
        <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/login" element={<Login/>} />
                <Route  path="/recovery-password" element={<Recoverypassword/>} />
                <Route path='*' element={<NotFound/>} />
        </Routes>
            </Layout>
    </BrowserRouter>
    );
}
// a esto nos referimos
export default App;