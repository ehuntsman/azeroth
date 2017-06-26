import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRace, getClass} from '../../ducks/animals.js';

import MainNavi from '../MainNavi/MainNavi';

import human from './human.png';
import bloodelf from './bloodelf.png';
import draenei from './draenei.png';
import dwarf from './dwarf.png';
import gnome from './gnome.jpg';
import goblin from './goblin.jpg';
import nightelf from './nightelf.png';
import orc from './orc.png';
import pandaren from './pandaren.png';
import tauren from './tauren.png';
import undead from './undead.png';
import worgen from './worgen.jpg';

import deathknight from './deathknight.png';
import druid from './druid.png';
import hunter from './hunter.png';
import mage from './mage.png';
import monk from './monk.png';
import paladin from './paladin.png';
import priest from './priest.png';
import rogue from './rogue.png';
import shaman from './shaman.png';
import warlock from './warlock.png';
import warrior from './warrior.png';
import demonhunter from './demonhunter.png';

class Characters extends Component {
    constructor(props){
        super(props);

        this.state = {
            animal: ["cake"]
        }
    }
    componentDidMount(){
        this.props.getRace();
        this.props.getClass();
    }
    render() {
        return (
            <div className="animals-container">
                <div className="char-header">
                </div>
                <div className="row-your-boat">
                    <div>
                        <div className="beast-header">
                            <h2>Playable Races</h2>
                        </div>
                        {this.props.characters.map((element, index)=>{
                            {if(element.name == "Human"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={human}/>
                                        <p>{element.name}</p>
                                    </div>
                                )  
                            }else if(element.name == "Undead"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={undead}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Goblin"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={goblin}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Orc"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={orc}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Undead"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={undead}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Worgen"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={worgen}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Draenei"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={draenei}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Blood Elf"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={bloodelf}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Dwarf"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={dwarf}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Gnome"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={gnome}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Pandaren" && element.side === "horde"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={pandaren}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Tauren"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={tauren}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }else if(element.name == "Night Elf"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={nightelf}/>
                                        <p>{element.name}</p>
                                    </div>
                                ) 
                            }
                            
                            }
                        })}
                    </div>
                    <div>
                        <div className="beast-header">
                            <h2>Playable Classes</h2>
                        </div>
                        {this.props.class.map((element, index)=>{
                            {if(element.name === "Death Knight"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={deathknight}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Priest"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={priest}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Druid"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={druid}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Hunter"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={hunter}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Mage"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={mage}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Monk"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={monk}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Paladin"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={paladin}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Rogue"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={rogue}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Shaman"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={shaman}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Warlock"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={warlock}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Warrior"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={warrior}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }else if(element.name == "Demon Hunter"){
                                return(
                                    <div className="char-box" key={index}>
                                        <img src={demonhunter}/>
                                        <p>{element.name}</p>
                                    </div>
                                )
                            }
                            }
                        })}
                    </div>
                </div>
                <div className="spacer"></div>
                <MainNavi/>
            </div>
        );
    }
}

function mapStateToProps(state){
  return {
    animal: state.animal.pets,
    loading: state.animal.loading,
    error: state.animal.error,
    characters: state.characters.races,
    class: state.class.classes,
  }
}

export default connect(mapStateToProps, {getRace, getClass})(Characters);