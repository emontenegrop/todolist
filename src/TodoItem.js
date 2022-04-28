import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className='TodoItem' >
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon Icon-check--active'}`}
                onClick={props.onComplete}>
                √
            </span>
            <span className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </span>
            <span 
                className='ICon Icon-delete'
                onClick={props.onDelete}>
                    X
            </span>
        </li>
    );
}

export { TodoItem };