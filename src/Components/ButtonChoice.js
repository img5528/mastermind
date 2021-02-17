import React from 'react';
import {useDispatch, useSelector} from 'react-redux';



export default function ButtonChoice(state) {

    const {choice} = useSelector(state => ({
        ...state.buttonChoiceReducer
    }));
    const dispatch = useDispatch();
    

    const handleUpdate = () =>{
        dispatch({
            type: 'UPDATE',
            payload: state.letterChoice
        })
    }

    const setButtonColor = (id) => {
        if(id === true){
            return 'green';
        } else if (id === false){
            return 'red';
        } else {
            return '';
        }
    }
    
    return (
        <button 
        onClick={handleUpdate} 
        className={setButtonColor(choice[state.letterChoice])}
        >
            {state.letterChoice}
        </button>
    )
}
