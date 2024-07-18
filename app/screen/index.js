// How Redux work flow chart
// javaScript ->Action -> Reducer -> Redux store
import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
//Action => The only way your application can interact with the store
// Carry some information form your app to the redux store
//Have a 'type' property that describes something that happened in the application
//'Type' property is typically defined as String constant
const CAKE_ORDERED = 'CAKE_ORDERED';
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

//Restocking Cakes
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
}

// Reducers => Specify how the app state change in response to action sent to the store
// Function that accepts state and action as arguments and return the next state of the application

const initialState = {
  numofCakes: 10,
  //If we use two more properties
  // anotherProperty : 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        //Copy of state Object and then change only the properties that need to
        //To make a copy we sure Spread operator
        // ...state,
        numofCakes: state.numofCakes - 1,
      };
    //For ReStocking Cakes
    case CAKE_RESTOCKED:
      return {
        ...state,
        numofCakes: state.numofCakes + action.quantity,
      };

    default:
      return state;
  }
};

//Redux Store => one store for the entire application
// Responsibilties - Hold application State, Allow access state, Allow update , Register listeners, Handles unregistering of listeners
const store = createStore(reducer);
console.log('Initial State', store.getState());

const unsubsribe = store.subscribe(() =>
  console.log('pdate state', store.getState()),
);
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

//Bind Action Creators => Function turn an object whose values are action creator into an object with the same keys but
//every action creator wrapped into a dispatch call so they may be invoked directly
/// It use to be helpFull back in day when react code basis had separation  of container and presentation component
/// need to dispatch action but not aware  of redux
const action = bindActionCreator({orderCake, restockCake}, store.dispatch);
action.orderCake();
action.orderCake();

unsubsribe();
