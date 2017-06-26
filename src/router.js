import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/HomeHeader';
import Stormwind from './components/Stormwind/Stormwind';
import Darnassus from './components/Darnassus/Darnassus';
import Darkmoon from './components/Darnassus/Darkmoon';
import Orgrimmar from './components/Orgrimmar/Orgrimmar';
import Animals from './components/Animals/Animals';
import Characters from './components/Characters/Characters';

export default(
    <Switch>
        <Route exact component={Home} path='/' />
        <Route component={Stormwind} path='/Stormwind' />
        <Route component={Darnassus} path='/Darnassus' />
        <Route component={Orgrimmar} path='/Orgrimmar' />
        <Route component={Darkmoon} path='/DarkmoonFaire' />
        <Route component={Animals} path='/animals' />
        <Route component={Characters} path='/characters' />
    </Switch>
)