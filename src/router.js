import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/HomeHeader';
import Stormwind from './components/Stormwind/Stormwind';

export default(
    <Switch>
        <Route exact component={Home} path='/' />
        <Route component={Stormwind} path='/Stormwind' />
    </Switch>
)