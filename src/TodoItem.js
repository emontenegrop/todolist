import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {

    const onComplete = () => { 
        alert('Ya completaste el todo' + props.text);
    }

    const onDelete = () => { 
        alert('Borraste el todo' + props.text);
    }

    return (
        <li className='TodoItem' >
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon Icon-check--active'}`}
                onClick={onComplete} 
            >√</span>
            <span className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </span>
            <span 
                className='ICon Icon-delete'
                onClick={onDelete}
            >X</span>
        </li>
    );
}

export { TodoItem };