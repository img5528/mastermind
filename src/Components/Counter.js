import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


export default function Counter() {

    const {count} = useSelector(state => ({
        ...state.counterReducer
    }));
    const dispatch = useDispatch();

    const incrementCount = () =>{
        dispatch({
            type: 'INCR'
        })
    }

    const decrementCount = () =>{
        dispatch({
            type: 'DECR'
        })
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </div>
    )
}
