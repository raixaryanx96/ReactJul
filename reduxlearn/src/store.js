import { createStore } from 'redux'

//initial state -> It is variable
const intialState = {
      user: {
            username : "Gamana",
            balance : 50000
      },
};

//Action -> export and  It is variable

export const addMoney = (amt) => ({
      type: "addMoney",
      payload: amt,
});

export const removeMoney = (amt) => ({
      type: "removeMoney",
      payload: amt,
});

//Reducer state -> It is a function

function reducer (state = intialState, action ) {

      switch(action.type) {
            case "addMoney": 
            return {
                  user : {
                        username : state.user.username,
                        balance : state.user.balance + action.payload
                  }
            };


            case "removeMoney": 
            return {
                  user : {
                        username : state.user.username,
                        balance : state.user.balance + action.payload
                  }
            };

            default :
            return state
      }
}


const store = createStore(reducer);
export default store;