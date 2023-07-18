import React from 'react';
import Todos from './Todos';
import style from "./todo.module.css"

const Todo = (propos) => {
    const {title, desc}= propos.todo;
    const {id}= propos;
    const handleClick = (id) => {
        propos.onRemoveTodo(id);
    }
    return (
        <article className={style.todo}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div>
                <button className={style.btn} onClick={()=>{handleClick(id)}}>
                    <i className ="fa fa-trash fa-2x"></i>
                </button>
            </div>
        </article>
    );
};

export default Todo;
