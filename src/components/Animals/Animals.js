import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setAnimal} from '../../ducks/animals.js';

import MainNavi from '../MainNavi/MainNavi';

import love from './love.svg';

class Animals extends Component {
    constructor(props){
        super(props);

        this.state = {
            animal: ["cake"]
        }
    }
    componentDidMount(){
        this.props.setAnimal()
    }
    render() {
        return (
            <div className="animals-container">
                <div className="animal-header">
                    <img src={love} alt="love animals"/>
                </div>
                <div className="row-your-boat">
                    <h4>As you travel around Azeroth, see if you can spot one of these adorable creatures. Surely they'll snuggle up with you.</h4>
                    <div>
                        <div className="beast-header">
                            <h2>Beasts</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "beast")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="magical-header">
                            <h2>Magical Animals</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "magical")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="mech-header">
                            <h2>Mechanical Animals</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "mechanical")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="dragon-header">
                            <h2>Dragonkin</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "dragonkin")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="undead-header">
                            <h2>Undead Animals</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "undead")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="elemental-header">
                            <h2>Elementals</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "elemental")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="flying-header">
                            <h2>Flying Animals</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "flying")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="humanoid-header">
                            <h2>Humanoids</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "humanoid")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="water-header">
                            <h2>Water Animals</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "water")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
                            }
                        })}
                    </div>
                    <div>
                        <div className="critter-header">
                            <h2>Critters</h2>
                        </div>
                        {this.props.animal.map((element, index)=>{
                            {if (element.family === "critter")
                            return(
                                <div className="pet-box" key={index}>
                                    <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                    <p>{element.name}</p>
                                </div>
                            )
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
    characters: state.characters.races
  }
}

export default connect(mapStateToProps, {setAnimal})(Animals);