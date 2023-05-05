import React, {useEffect, useState} from 'react';

const TodoList = () => {
    const handleClick = () => {
        console.log('Button clicked');
      };
    return (
    <> 
        <div className="header text-center">
            <h3>Todo List</h3>
            <button className= "btn btn-primary mt-2" onClick={handleClick}>Create Task</button>
        </div>
    </>
    );
};

export default TodoList;