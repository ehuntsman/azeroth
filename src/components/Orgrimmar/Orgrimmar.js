import React, { Component } from 'react';

import MainNavi from '../MainNavi/MainNavi';
import orggreet from './orggreet.svg';
import sylvanas from './sylvanas.png';
import hordecrest from './hordecrest.png';

class Orgrimmar extends Component {
    render() {
        return (
            <div className="orgrimmar-container">
                <div className="para-one">
                    <img src={orggreet} alt="greetings"/>
                </div>
                <div className="para-two">
                    <img className="sylvanas-img" src={sylvanas} alt="sylvanas" />
                    <img className="hordecrest-img" src={hordecrest} alt="horde crest" />
                </div>
                <div className="para-three">
                    <div className="sw-history">
                        <h3>History of Orgrimmar</h3>
                        <p>Orgrimmar is the capital city of the orcs, and the Horde as a whole. Found at the northern edge of Durotar, the imposing city was once home to Warchief Vol'jin, as well as several of those who held the title before him. As with all capital cities, it has banks, class and profession trainers and auction houses.</p>
                        <p>Named in honor of the legendary Orgrim Doomhammer, Orgrimmar was founded by Thrall as the capital city of the orcs' new homeland. Built within a huge, winding canyon in the harsh land of Durotar, Orgrimmar stands as one of the mightiest warrior cities in the world. Behind Orgrimmar's immense walls, elderly shaman pass their knowledge on to the Horde's newest generation of leaders, while warriors spar in the gladiatorial arena, honing their skills in preparation for the trials that await them in this dangerous land.</p>
                    </div>
                </div>
                <div className="para-four">
                    <h3>For the Dark Lady, Sylvanas Windrunner</h3>
                </div>
                <div className="para-five">
                    <div className="interests">
                        <h1>Places of Interest</h1>
                        <ul>
                            <li>Hall of Legends</li>
                            <li>Valley of the Spirits</li>
                            <li>Valley of Honor</li>
                            <li>Valley of Wisdom</li>
                            <li>Valley of Strength</li>
                        </ul>
                    </div>
                </div>
                <MainNavi />
            </div>
        );
    }
}

export default Orgrimmar;