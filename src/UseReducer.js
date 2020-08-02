
const numberReducer = (state, action) => {
    switch(action.value) {
        case 'INCREMENT':
            return state + 1;
        
        case 'DECREMENT':
            return state - 1;

        case 'ADDSPECIFICVALUE':
            return state + action.addVal;
    }
} 

export default numberReducer;