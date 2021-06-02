import React from 'react'

import TaskItem from './TaskItem'

const TaskList = ({taskList}) => {
    
    return (
        <div>
            {
                taskList.map(todo => <TaskItem todo={todo} key={todo.id}/>)
            }
        </div>
    )
}

export default TaskList
