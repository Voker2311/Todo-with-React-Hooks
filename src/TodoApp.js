import React, { useEffect, useState } from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Footer from "./Footer";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1
    },
    typography: {
      alignItems: "center"
    }
  };

function TodoApp(props) {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
    // const initialTodos = [
    //     {id:1, task:"Buy Beers", completed:false},
    //     {id:2, task:"Clean Bike", completed:true},
    //     {id:3, task:"Play Doto", completed:false}
    // ];

    const [ todos, setTodos ] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos",JSON.stringify(todos));
    })

    const addTodos = todoText => {
        setTodos([...todos,{id: uuidv4(),task:todoText,completed:false}]);
    }

    const removeTodos = todoId => {
        const updatedTodos = todos.filter( todo => todo.id !== todoId );
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map( todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed }: todo
        );
        setTodos(updatedTodos);
    };

    const editTodo = (todoId,newTask) => {
        const updatedTodos = todos.map( todo => 
                todo.id === todoId ? {...todo,task:newTask} : todo
            );
        setTodos(updatedTodos);
    }
    const { classes } = props;


    return (
       <Paper style={
          { 
           padding:0,
           margin:0, 
           height:"100vh",
           backgroundColor:"#fafafa"
          }}
          elevation={0}
          >
          <div className={classes.root}>
          <AppBar color="primary" position="static" style={{ height:"64px" }}>
                <Typography color="inherit" align='center' style={{ marginTop:"20px"}}>TODOS WITH React Hooks</Typography>
          </AppBar>
          </div>
          <Grid container justify="center" style={{ marginTop:"2rem"}}> 
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodos}/>
                <TodoList 
                todos={todos} 
                removeTodos={removeTodos} 
                toggleTodo={toggleTodo}
                editTodo = {editTodo}
                />
                <Footer />
            </Grid>
          </Grid>
       </Paper>
    )
}

export default withStyles(styles)(TodoApp);
 