import React from 'react';
import {BrowserRouter, Routes , Route, Switch,  } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Button from './components/Button';

const StatementService = React.lazy(() => import("Statement/HomeStatement"));


export default function Router() {
    
    console.log(StatementService);
    
    return (
     
        <BrowserRouter>
        <Header></Header>
        {/* <StatementService></StatementService> */}
        <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/statement" component={StatementService}></Route>
            <Route exact path="/button" component={Button}></Route>
        </Switch>       
    </BrowserRouter>
     
    )
}