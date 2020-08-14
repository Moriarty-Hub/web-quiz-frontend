import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Link, Switch} from 'react-router-dom';
import {Route} from "react-router";
import Home from "./Home";

class App extends Component {



    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" >商城</Link>
                            </li>
                            <li>
                                <Link to="/#">订单</Link>
                            </li>
                            <li>
                                <Link to="/#">添加商品</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
