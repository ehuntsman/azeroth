import React from 'react';

import MainNavi from '../MainNavi/MainNavi';

import darkhead from '../Home/darkmoon.png';
import silas from './Silas.jpg';

const Darkmoon = () => {
    return (
        <div className="darkmoon-container">
            <div className="dm-head">
                <img src={darkhead} alt="darkmoon faire"/>
                <h4>Come one, come all, to the</h4>
                <h1>Darkmoon Faire</h1>
                <h4>First week of each month</h4>
            </div>
            <div className="dm-history">
                <div className="dm-info-container">
                    <div className="dm-info">
                        <p className="dm-sign">Ahead of You,<br/>
                        Down the Path<br/>
                        A Majestic,<br/>
                        Magical Faire!<br/>
                        Ignore the Darkened,<br/>
                        Eerie Woods<br/>
                        Ignore the Eyes<br/>
                        That Blink and Stare<br/>
                        Fun & Games<br/>
                        & Wondrous Sights!<br/>
                        Music & Fireworks<br/>
                        to Light Up the Night!<br/>
                        Do Not Stop!<br/>
                        You're Nearly There!<br/>
                        Behold, My Friend:<br/>
                        THE DARKMOON FAIRE!</p>
                        <p>The Darkmoon Faire showcases the weird and the extraordinary. Gathering the exotic from around the world, Silas Darkmoon presents the Darkmoon Faire as a celebration of the wonders and mysteries found in Azeroth. The Faire spends most of its time in parts unknown, they are available from time to time by accessing portals in Elwynn Forest and Mulgore.</p>
                    </div>
                </div>
                <div className="silas">
                    <img src={silas} alt="Silas" />
                    <div className="silas-text">
                        <p>We may dress differently... or seem odd... but we're really just like everyone else. We value the same things you do... money, happiness, family... Yes, we're a family. We're a family that, like every other rube family out there, takes care of our own. We just do it our own way."</p>
                        <p><span className="signed">— Silas</span><br/>
                        <small>Spoken to Cedrick Fallrook, shortly before locking him inside a coffin and burying Cedrick alive</small></p>
                    </div>
                </div>
                <div className="parallax-three">
                    <div className="interests">
                        <h1>Games and Fun for All!</h1>
                        <ul>
                            <li>It's Hammer Time</li>
                            <li>The Humanoid Cannonball</li>
                            <li>He shoots, He Scores</li>
                            <li>Tonk Commander</li>
                            <li>Target:Turtle</li>
                            <li>Firebird's Challenge</li>
                            <li>The Real Race</li>
                            <li>The Real Big Race</li>
                            <li>Carousel Ride</li>
                            <li>Fortune told by Sayge</li>
                            <li>PVP Arena</li>
                            <li>Pony Rides</li>
                            <li>Concert Stage</li>
                            <li>Fireworks</li>
                        </ul>
                    </div>
                </div>
            </div>
            <MainNavi/>
        </div>
    );
};

export default Darkmoon;