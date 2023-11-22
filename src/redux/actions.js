import { ADD_NEW_TODO, CREATE_NEW_TASK } from "./actionTypes"


export const newTask = (taskTitle) => ({
    type: CREATE_NEW_TASK,
    payload: taskTitle,
});
export const newTodo = (todo,title) => ({
    type: ADD_NEW_TODO,
    payload: {todo,title},
})