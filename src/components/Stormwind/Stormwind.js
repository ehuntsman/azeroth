import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import DataStuff from '../Animals/DataStuff';
import MainNavi from '../MainNavi/MainNavi';
import swgreet from './SWgreetings.svg';

class Stormwind extends Component {
    render() {
        $(document).ready(function(){
            $("#home").hover(
                function(){
                    $("#home img").animate({
                        height: '+=5px',
                        width: '+=5px'
                    });
                }, function(){
                    $("#home img").animate({
                        height: '-=5px',
                        width: '-=5px'
                    });
                }
            ),
            $("#shop").hover(
                function(){
                    $("#shop img").animate({
                        height: '+=5px',
                        width: '+=5px'
                    });
                }, function(){
                    $("#shop img").animate({
                        height: '-=5px',
                        width: '-=5px'
                    });
                }
            ),
            $("#fish").hover(
                function(){
                    $("#fish img").animate({
                        height: '+=5px',
                        width: '+=5px'
                    });
                }, function(){
                    $("#fish img").animate({
                        height: '-=5px',
                        width: '-=5px'
                    });
                }
            ),
            $("#eat").hover(
                function(){
                    $("#eat img").animate({
                        height: '+=5px',
                        width: '+=5px'
                    });
                }, function(){
                    $("#eat img").animate({
                        height: '-=5px',
                        width: '-=5px'
                    });
                }
            )
        })
        return (
            <div className="stormwind-container">
                <div className="para-one">
                    <img src={swgreet} />
                </div>
                <div className="para-two">
                    <DataStuff/>
                </div>
                <div className="para-three">
                    <div className="sw-history">
                        <h3>Currently in Stormwind</h3>
                        <p>The hard-working citizens of Stormwind have been hard at work rebuilding Stormwind Park where they managed to rebuild a large mass of earth that was ripped out of the land from Deathwing's attack to rebuild the park upon . Following the death of King Varian Wrynn at the Broken Shore, King Wrynn's tomb is displayed in a portion of the new park as well as a memorial listing the names of fallen Alliance soldiers.</p>
                        <p>The young prince, Anduin Wrynn, was officially crowned the new king of Stormwind.</p>
                        <p>As the biggest patron of the Alliance, the kingdom of Stormwind continues to lead the Alliance in their never ending war against the threats to Azeroth and their perennial enemy, the Horde. Under King Wrynn's guidance, Stormwind hopes to usher an age of lasting peace.</p>
                    </div>
                </div>
                <div className="para-four">
                    <h3>All hail the young prince, King Anduin Wrynn</h3>
                </div>
                <div className="para-five">
                    <div className="interests">
                        <h1>Places of Interest</h1>
                        <ul>
                            <li>Stormwind Keep</li>
                            <li>Cathedral of Light</li>
                            <li>Stormwind Harbor</li>
                            <li>The Park</li>
                            <li>Valley of Heroes</li>
                            <li>Deeprun Tram</li>
                            <li>The Stockade</li>
                        </ul>
                    </div>
                </div>
                <MainNavi />
            </div>
        );
    }
}

export default Stormwind;