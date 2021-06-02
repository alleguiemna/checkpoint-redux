import {ADD_TASK,EDIT_TASK,DELETE_TASK,COMPLETE_TASK} from '../type'

export const addTask = (newTask) => {
    return ({
        type:ADD_TASK,
        payload:newTask
    }  );
}


export const completeTask = (payload) => ({
    type: COMPLETE_TASK,
    payload //payload:id
})


export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload//payload:id
})

export const editTask = (id,value) => ({
    type: EDIT_TASK,
    payload:{id,value}
})




