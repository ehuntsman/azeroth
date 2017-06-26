import React, { Component } from 'react';

import MainNavi from '../MainNavi/MainNavi';

import darngreet from './DarnGreet.svg';

class Darnassus extends Component {
    render() {
        return (
            <div className="darnassus-container">
                <div className="para-one">
                    <img src={darngreet} alt="greetings"/>
                </div>
                <div className="para-two">
                    <p>Home to the enchanting Night Elves</p>
                </div>
                <div className="para-three">
                    <div className="darn-history">
                        <h3>Darnassus is like no other</h3>
                        <p>The atmosphere inside the city is quiet and tranquil. It does not have the feeling of confinement that one would feel in Stormwind or Ironforge, where the buildings are grouped close together. Darnassus is open to the sky, and the graceful bridges spanning the lake around which it is built set the buildings wide apart.</p>The elegant bridges, beautiful groves, and leaf-covered pathways that dot the city’s landscape are testaments to the night elves’ reverence for nature.
                        <p>One of Darnassus’s most notable structures is the stunning Temple of the Moon, the center of worship for High Priestess Tyrande Whisperwind and her Sisters of Elune. The prime reason why the city's population is so low is that it is isolated: Teldrassil is a small island away from the main mass of Azeroth, and the only way to gain access from another continent is to fly or sail to Rut'theran Village, a small settlement at the base of Teldrassil, and from there step into the glowing portal to the city proper.</p>
                    </div>
                </div>
                <div className="para-four">
                    <h3>High Priestess Tyrande Whisperwind watch over you</h3>
                </div>
                <div className="para-five">
                    <div className="interests">
                        <h1>Places of Interest</h1>
                        <ul>
                            <li>Temple of the Moon</li>
                            <li>Warrior's Terrace</li>
                            <li>Temple Gardens</li>
                            <li>Cenarion Enclave</li>
                            <li>The Howling Oak</li>
                            <li>Bough of the Eternals</li>
                        </ul>
                    </div>
                </div>
                <MainNavi />
            </div>
        );
    }
}

export default Darnassus;