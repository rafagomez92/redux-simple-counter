const INITIAL_STATE = ({ counter: 0 });

export function counterApp(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'INCREMENT':            
            return { 
                counter: state.counter + 1 
            }
        case 'DECREMENT':                                     
            if (state.counter > 0) {
                return {
                    counter: state.counter - 1
                }           
            }
            return { counter: 0}
        case 'RESET':
            return {
                counter: 0
            }            
        default:
            return state;
    }
}
