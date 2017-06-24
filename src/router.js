import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/HomeHeader';
import Stormwind from './components/Stormwind/Stormwind';
import Darnassus from './components/Darnassus/Darnassus';
import Animals from './components/Animals/Animals';

export default(
    <Switch>
        <Route exact component={Home} path='/' />
        <Route component={Stormwind} path='/Stormwind' />
        <Route component={Darnassus} path='/Darnassus' />
        <Route component={Animals} path='/animals' />
    </Switch>
)