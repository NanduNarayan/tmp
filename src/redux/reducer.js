/* eslint-disable import/no-anonymous-default-export */

import { ADD_NEW_TODO, CREATE_NEW_TASK } from "./actionTypes"

export default (state={},{type,payload})=>{
    switch (type) {
        case CREATE_NEW_TASK:    
            const currentStateClone=structuredClone(state);
            currentStateClone.tasks.push({title:payload,todos:[]})
             return{
                ...currentStateClone
             }
        case ADD_NEW_TODO:
            const{todo,title}=payload;
            const updates=structuredClone(state).map(
                (task)=>task.title.includes(title)?task.todos.push(todo):task
            )

            return{
                ...updates
            }
        default:
            return (state)
    }
}