import React from "react";

//Functional props
function Todo({todos, onDelete, onAdd}){
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                                                //Unique key when using .map()
                <div className="collection-item" key={todo.id}>
                    <span onClick={
                        //Since function is declared with parentheses, it will be envoked automatically.
                        // Use arrow function to avoid that
                        () => {onDelete(todo.id)}
                        } 
                        style={{cursor: "pointer"}}>{todo.content}</span>
                </div>
            )
        })
    ) : (<p className="center">No todo's left</p>);

    return (
        <div className="todos collection">
            {todoList}
        </div>
    );
}

export default Todo;