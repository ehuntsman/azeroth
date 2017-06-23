import React, { Component } from 'react';

import CallToAction from './CallToAction';
import Navi from './Navi';

import layerzero from './header-0.svg';
import layerone from './header-1.svg';
import layertwo from './header-2-01.svg';
import layerthree from './header-3-01.svg';

class HomeHeader extends Component {
    render() {
        return (
            <div className="parallax">
                <Navi/>
                <div className="layer-0 parallax-layer">
                    <img src={layerzero}/>
                </div>
                <div className="layer-1 parallax-layer">
                    <img src={layerone}/>
                </div>
                <div className="layer-2 parallax-layer">
                    <img src={layertwo}/>
                </div>
                <div className="layer-3 parallax-layer">
                    <img src={layerthree}/>
                </div>
                <div className="parallax-cover">
                    <h1 className="main-head">A world of Adventure awaits you</h1>
                    <CallToAction/>
                </div>
            </div>
        );
    }
}

export default HomeHeader;