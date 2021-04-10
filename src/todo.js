import React from 'react'
import { ListItem, ListItemText, Button } from "@material-ui/core"
import { db } from "./firebase";

function TodoListItem({ todo, inProgress, id}) {

    function toggleInProgress() {
        db.collection("todos").doc(id).update({
            inProgress: !inProgress
        })
    }

    function deleteTodo(){
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{display: "flex"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inProgress ? "In Progress" : "Completed"}/>
            </ListItem>
            <Button onClick={toggleInProgress}>{inProgress ? "Done" : "Undone"}</Button>
            <Button onClick={deleteTodo}>Delete</Button>
        </div>
    )
}

export default TodoListItem
