import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'


//action
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
};

let store = createStore(counter)
//display on clg
store.subscribe(() => console.log(store.getState()))
//dispatch
store.dispatch(increment())



















ReactDOM.render(<App />, document.querySelector('#root'));
