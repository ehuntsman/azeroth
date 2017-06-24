import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setAnimal} from '../../ducks/animals.js';
import {Link} from 'react-router-dom';

import home from '../Stormwind/home.png';
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
                    {this.props.animal.map((element, index)=>{
                        return(
                            <div className="pet-box" key={index}>
                                <img src={`http://media.blizzard.com/wow/icons/56/${element.icon}.jpg`} alt={element.name}/>
                                <p>{element.name}</p>
                            </div>
                        )
                    })}
                </div>
                <section className="animals-nav">
                    <ul>
                        <li id="home"><Link to='/'>
                            <img src={home} alt="home"/>
                            <p>home</p>
                        </Link></li>
                    </ul>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state){
  return {
    animal: state.animal.pets,
    loading: state.animal.loading,
    error: state.animal.error
  }
}

export default connect(mapStateToProps, {setAnimal})(Animals);