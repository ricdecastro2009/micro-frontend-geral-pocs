import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home';
import Button from './components/Button';

const StatementHome = React.lazy(() => import("Statement/HomeStatement"));
const IbApp = React.lazy(() => import("Ib/IbApp"));


export default function Routes() {
    return (
        <>
        
             <BrowserRouter>
                <Header></Header> 
                <Suspense fallback="Loading">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/button" component={Button}></Route>
                        <Route exact path="/statement" component={StatementHome}></Route>
                        <Route exact path="/ib" component={IbApp}></Route>
                     </Switch>
                </Suspense>
            </BrowserRouter>   
        </>
    )
}