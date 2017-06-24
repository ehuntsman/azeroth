import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import corgi from '../Animals/corgi.png';

class DataStuff extends Component {
    render() {
        return (
            <div className="animals-link-thing">
                <Link to='/animals'>
                    <img src={corgi} alt="corgi"/>
                    <h1>See the animals of Azeroth!</h1>
                </Link>
            </div>
        );
    }
}

export default DataStuff;