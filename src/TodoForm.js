import React from 'react'
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";


function TodoForm(props) {
    const [value,handleChange,reset] = useInputState("");
    return (
        <Paper style={{ margin:"1rem 0 ", padding:"0 1rem" }}>
            <form onSubmit= {e => {
                e.preventDefault();
                props.addTodo(value);
                reset();
            }}>
                <TextField spellCheck="false" value={value} onChange={handleChange} margin="normal" label="What's up" fullWidth/>
            </form>
        </Paper>
    )
}

export default TodoForm;
