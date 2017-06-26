import React from 'react';
import {Link} from 'react-router-dom';

import pets from './petStore.png';
import characters from './characters.png';
import faire from './tarot.png';
import darnassus from './darnassus.png';
import alliance from './alliance.png';
import horde from './horde.png';
import home from './home.png';

const MainNavi = () => {
    return (
        <div>
            <section className="main-nav">
                    <ul>
                        <li id="home"><Link to='/'>
                            <img src={home} alt="home"/>
                            <p>home</p>
                        </Link></li>
                        <li id="shop"><Link to='/Darnassus'>
                            <img src={darnassus} alt="Darnassus"/>
                            <p>Darnassus</p>
                        </Link></li>
                        <li id="fish"><Link to="/Stormwind">
                            <img src={alliance} alt="Stormwind"/>
                            <p>Stormwind</p>
                        </Link></li>
                        <li id="eat"><Link to="/Orgrimmar">
                            <img src={horde} alt="Orgrimmar"/>
                            <p>Orgrimmar</p>
                        </Link></li>
                        <li id="petShop"><Link to='/animals'>
                            <img src={pets} alt="animals"/>
                            <p>Animals</p>
                        </Link></li>
                        <li id="faire"><Link to='/DarkmoonFaire'>
                            <img src={faire} alt="darkmoon faire"/>
                            <p>Darkmoon</p>
                        </Link></li>
                        <li id="characters"><Link to='/characters'>
                            <img src={characters} alt="characters"/>
                            <p>Characters</p>
                        </Link></li>
                    </ul>
                </section>
        </div>
    );
};

export default MainNavi;