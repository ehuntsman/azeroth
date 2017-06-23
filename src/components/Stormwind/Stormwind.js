import React, { Component } from 'react';

import shopping from './shopping.png';
import fishing from './fishing.png';
import eating from './eating.png';

class Stormwind extends Component {
    render() {
        return (
            <div className="stormwind-container">
                <div className="para-one">
                    <h1>stormwind baby</h1>
                </div>
                <section className="stormwind-nav">
                    <ul>
                        <li><img src={shopping} alt="shopping"/></li>
                        <li><img src={fishing} alt="fishing"/></li>
                        <li><img src={eating} alt="eating"/></li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Stormwind;