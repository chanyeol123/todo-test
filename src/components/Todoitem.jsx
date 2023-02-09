import React from "react";


function Todoitem(props){
    return(
        <div className="todo-item">           
            {props.todos}           
        </div>
    )
}

export default Todoitem