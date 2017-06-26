import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import nightelf from './nightelf.png';
import human from './human.png';
import orc from './orc.png';

class CallToAction extends Component {
    render() {
        $(document).ready(function(){
            $(".darnassus h1").css("color", "purple")
            $(".stormwind h1").css("color", "blue")
            $(".orgrimmar h1").css("color", "red")
        })
        return (
            <div className="home-main-cities-container">
                <div className="cities">
                    <Link to="/Darnassus">
                        <div className="citybox">
                            <div className="darn-image"></div>
                            <img src={nightelf} alt="city"/>
                            <h1>Darnassus</h1>
                            <p>Adipisicing anim ex aliquip voluptate ipsum cupidatat. Labore eiusmod sint irure ullamco magna nostrud et veniam duis.</p>
                        </div>
                    </Link>
                    <Link to="/Stormwind">
                        <div className="citybox">
                            <div className="sw-image"></div>
                            <img src={human} alt="city"/>
                            <h1>Stormwind</h1>
                            <p>Adipisicing anim ex aliquip voluptate ipsum cupidatat. Labore eiusmod sint irure ullamco magna nostrud et veniam duis.</p>
                        </div>
                    </Link>
                    <Link to="/Orgrimmar">
                        <div className="citybox">
                            <div className="org-image"></div>
                            <img src={orc} alt="city"/>
                            <h1>Orgrimmar</h1>
                            <p>Adipisicing anim ex aliquip voluptate ipsum cupidatat. Labore eiusmod sint irure ullamco magna nostrud et veniam duis.</p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CallToAction;