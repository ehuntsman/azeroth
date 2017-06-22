import React, { Component } from 'react';
import $ from 'jquery';
import nightelf from './nightelf.png';
import human from './human.png';
import orc from './orc.png';

class MainCities extends Component {
    render() {
        $(document).ready(function(){
            $(".darnassus h1").css("color", "purple")
            $(".stormwind h1").css("color", "blue")
            $(".orgrimmar h1").css("color", "red")
        })
        return (
            <div className="home-main-cities-container">
                <div className="home-city-box stormwind">
                    <div className="citySide">
                        <div className="citySide-text">
                            <img src={human} />
                            <h1>Stormwind</h1>
                            <p>Adipisicing anim ex aliquip voluptate ipsum cupidatat. Labore eiusmod sint irure ullamco magna nostrud et veniam duis.</p>
                        </div>
                        <div className="citySide-img">
                        </div>
                    </div>
                    <div className="cityImage">
                    </div>
                </div>
                <div className="home-city-box orgrimmar">
                    <div className="cityImage">
                    </div>
                    <div className="citySide">
                        <div className="citySide-text">
                            <img src={orc} />
                            <h1>Orgrimmar</h1>
                            <p>Adipisicing anim ex aliquip voluptate ipsum cupidatat. Labore eiusmod sint irure ullamco magna nostrud et veniam duis.</p>
                        </div>
                        <div className="citySide-img">
                        </div>
                    </div>
                </div>

                <div className="fortuneCookie">
                    <h1>Get your fortune!</h1>
                    <h3>Visit the Darkmoon Faire</h3>
                    <button>click for your fortune</button>
                </div>

                <div className="home-city-box darnassus">
                    <div className="cityImage">
                    </div>
                    <div className="citySide">
                        <div className="citySide-text">
                            <img src={nightelf} />
                            <h1>Darnassus</h1>
                            <p>Adipisicing anim ex aliquip voluptate ipsum cupidatat. Labore eiusmod sint irure ullamco magna nostrud et veniam duis.</p>
                        </div>
                        <div className="citySide-img">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainCities;