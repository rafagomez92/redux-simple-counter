import React from 'react';

export function Counter ({ counter, increment, decrement, reset }) {    
    return (
        <div>
            <div>
                Contador: <span>{counter}</span>
            </div>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )    
}

