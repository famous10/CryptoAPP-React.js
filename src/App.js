import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css'


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/exchanges">
                            <Exchanges />
                        </Route>
                        <Route exact path="/Cryptocurrencies">
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path="/Crypto/:coinId">
                            <CryptoDetails />
                        </Route>
                        <Route exact path="/news">
                            <News />
                        </Route>
                    </div>
                </Layout>

       
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    Cryptoverse<br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchange">Exchange</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
        </div>
    )
}

export default App