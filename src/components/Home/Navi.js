import React, { Component } from 'react';
import logo from './logo.svg'

class Navi extends Component {
    render() {
        return (
            <div className="navi">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}

export default Navi;