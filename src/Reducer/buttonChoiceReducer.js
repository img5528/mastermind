const INITIAL_STATE = {
    choice: {
        a: null,
        b: null,
        c: null,
        d: null,
        e: null
    }
}

function buttonChoiceReducer(state = INITIAL_STATE, action) {

    if(action.type === 'UPDATE') {
        state.choice[action.payload] = !state.choice[action.payload];
        return  {...state}
    } else {
        return  {...state}
    }

}

export default buttonChoiceReducer;