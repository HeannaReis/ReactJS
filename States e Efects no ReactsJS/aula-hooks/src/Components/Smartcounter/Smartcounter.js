
import {useState} from 'react';

function SmartCounter (){

    const [quantity, upQuantity] = useState(1);
    
    return (
        <>
        <h1>{quantity}</h1>
        <button onClick={() => upQuantity(quantity +1)}>Aumentar</button>     
        </>
    )
}

export default SmartCounter;