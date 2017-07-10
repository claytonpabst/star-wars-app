
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Planet from './components/Planet/Planet.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Planet } path='/planet/:id' />

    </Switch>
)
