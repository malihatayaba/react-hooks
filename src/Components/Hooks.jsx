
import { useState } from 'react';

const Hooks = () => {
    const[value,setValue]=useState(0)
    const handleIncrement = ()=>{
        const newValue=value+5
        setValue(newValue)

    }
    const handleDecrement= ()=>{
        const newValue=value+6
        setValue(newValue)

    }

        
    return (
        <div className='btn-container'>
            <h1>Value={value}</h1>
            <button className='btn' onClick={handleIncrement}>Increment</button>
            <button className='btn'  onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Hooks;