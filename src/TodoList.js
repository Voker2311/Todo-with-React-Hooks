import React from 'react';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";

function TodoList(props) {
    if(props.todos.length)
        return (
            <Paper>
                <List>
                    {props.todos.map( todo => (
                        <>
                        <Todo  
                        id={todo.id}
                        task={todo.task} 
                        completed={todo.completed} 
                        key={todo.id} 
                        remove={props.removeTodos} 
                        toggleTodo={props.toggleTodo}
                        editTodo={props.editTodo}
                        />
                        <Divider />
                        </>
                    ) )}
                </List>
            </Paper>
        )

    else
        return null;
    };


export default TodoList;
