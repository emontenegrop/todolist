import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = () => {

const onClickButton = () => {
    alert('abrir modal');
}

    return ( 
        <button 
            className='CreateTodoButton'
            onClick={onClickButton}
            
        >+</button>
     );
}
 
export { CreateTodoButton };