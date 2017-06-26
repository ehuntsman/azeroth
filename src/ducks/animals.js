import axios from 'axios';

const initialState ={
    error: false,
    loading: false,
    animal: {pets: []},
    characters: {races: []},
    class: {classes: []}
};

const SET_ANIMAL = "SET_ANIMAL";
const ANIMAL_DETAILS = "ANIMAL_DETAILS";
const GET_RACE = "GET_RACE";
const GET_CLASS = "GET_CLASS";

export default function animalReducer(state = initialState, action){
    console.log("running reducer", action);
    switch(action.type){
        case SET_ANIMAL + "_PENDING":
            return{
                error: false,
                loading: true,
                animal: {pets: []},
                characters: state.characters,
                class: state.class
            }
        case SET_ANIMAL + "_FULFILLED":
            return{
                error: false,
                loading: false,
                animal: action.payload,
                characters: state.characters,
                class: state.class
            }
        case SET_ANIMAL + "_REJECTED":
            return {
                error: true,
                loading: false,
                animal: {pets: []},
                characters: state.characters,
                class: state.class
            }
        case GET_RACE + "_PENDING":
            return{
                error: false,
                loading: true,
                animal: state.animal,
                characters: state.characters,
                class: state.class
            }
        case GET_RACE + "_FULFILLED":
            return{
                error: false,
                loading: false,
                animal: state.animal,
                characters: action.payload,
                class: state.class
            }
        case GET_RACE + "_REJECTED":
            return {
                error: true,
                loading: false,
                animal: state.animal,
                characters: {races: []},
                class: state.class
            }
        case GET_CLASS + "_PENDING":
            return{
                error: false,
                loading: true,
                animal: state.animal,
                characters: state.characters,
                class: state.class
            }
        case GET_CLASS + "_FULFILLED":
            return{
                error: false,
                loading: false,
                animal: state.animal,
                characters: state.characters,
                class: action.payload
            }
        case GET_CLASS + "_REJECTED":
            return {
                error: true,
                loading: false,
                animal: state.animal,
                characters: state.characters,
                class: state.class
            }
        default: return state;
    }
}

export function setAnimal(){
    const url = "https://us.api.battle.net/wow/pet/?locale=en_US&apikey=x6smk5qvt6sabyd2t8datndcezm52f8c"
    const promise = axios.get(url).then(response => response.data);
    return {
        type: SET_ANIMAL,
        payload: promise
    }
}
export function getRace(){
    const url = "https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=x6smk5qvt6sabyd2t8datndcezm52f8c"
    const promise = axios.get(url).then(response => response.data);
    return {
        type: GET_RACE,
        payload: promise
    }
}

export function getClass(){
    const url = "https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=x6smk5qvt6sabyd2t8datndcezm52f8c"
    const promise = axios.get(url).then(response => response.data);
    return {
        type: GET_CLASS,
        payload: promise
    }
}