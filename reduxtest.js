const { createStore } = require('redux');

const initalState = {
    age: 12
}

const myReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD':
            return ({ ...state, age: ++state.age });

        case 'SUB':
            return ({ ...state, age: --state.age });

        case 'ADD_RANDOM':
            return ({ ...state, age: state.age + action.payload.age });

        case 'SUB_RANDOM':
            return ({ ...state, age: state.age - action.payload.age });

        default:
            return state;
    }
};

const store = createStore(myReducer);

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
});

store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'SUB' });
store.dispatch({ type: 'ADD_RANDOM', payload: { age: 10 } });
store.dispatch({ type: 'SUB_RANDOM', payload: { age: 5 } });
