import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import shopping from './shopping.png';
import fishing from './fishing.png';
import eating from './eating.png';
import home from './home.png';
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
                    <p>Home to the king blah blah blah</p>
                </div>
                <div className="para-three">
                </div>
                <div className="para-four">
                    <p>Home to the king blah blah blah</p>
                </div>
                <div className="para-five">
                </div>
                <section className="stormwind-nav">
                    <ul>
                        <li id="home"><Link to='/'>
                            <img src={home} alt="home"/>
                            <p>home</p>
                        </Link></li>
                        <li id="shop">
                            <img src={shopping} alt="shopping"/>
                            <p>shopping</p>
                        </li>
                        <li id="fish">
                            <img src={fishing} alt="fishing"/>
                            <p>fishing</p>
                        </li>
                        <li id="eat">
                            <img src={eating} alt="eating"/>
                            <p>food</p>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Stormwind;