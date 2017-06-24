import axios from 'axios';

const initialState ={
    error: false,
    loading: false,
    animal: {pets: []}
};

const SET_ANIMAL = "SET_ANIMAL";
const ANIMAL_DETAILS = "ANIMAL_DETAILS";

export default function animalReducer(state = initialState, action){
    console.log("running reducer", action);
    switch(action.type){
        case SET_ANIMAL + "_PENDING":
            return{
                error: false,
                loading: true,
                animal: {pets: []}
            }
        case SET_ANIMAL + "_FULFILLED":
            return{
                error: false,
                loading: false,
                animal: action.payload
            }
        case SET_ANIMAL + "_REJECTED":
            return {
                error: true,
                loading: false,
                animal: {pets: []}
            }
        default: return state;
    }
}

export function setAnimal(){
    const url = "https://us.api.battle.net/wow/pet/?locale=en_US&apikey=x6smk5qvt6sabyd2t8datndcezm52f8c"
    const promise = axios.get(url).then(response => response.data);
    console.log(promise, "i the promise");
    return {
        type: SET_ANIMAL,
        payload: promise
    }
}