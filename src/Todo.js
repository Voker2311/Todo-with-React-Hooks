import React, { useState } from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import CheckBox from "@material-ui/core/CheckBox";
import useInputState from './hooks/useInputState';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from "./hooks/useToggleState";
import EditForm from "./EditForm";
import Divider from "@material-ui/core/Divider";

function Todo(props) {
    const [isEditing,toggle] = useToggleState(false);

    return (
        <ListItem style={{ height: "64px"}}>
            { isEditing ? <EditForm editTodo={props.editTodo} id={props.id} toggleEditForm={toggle}/>:
            <> 
            <CheckBox tabIndex={-1} checked={props.completed} onClick={ () => { props.toggleTodo(props.id) }}/>
            <ListItemText style={{ textDecoration: props.completed ? "line-through" : "" }}>
                {props.task}
            </ListItemText>
            <ListItemSecondaryAction onClick={toggle}>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>

                <IconButton aria-label="Delete" onClick={() => { props.remove(props.id)}}>
                    <DeleteIcon />
                </IconButton>            
            </ListItemSecondaryAction>
            </>
        }
        </ListItem>
    )
}

export default Todo;
