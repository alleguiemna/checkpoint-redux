import React from 'react'

import TaskItem from './TaskItem'

const TaskList = ({taskList ,filter}) => {
  
    return (
        <div>
           { 
                 filter === "done" ? taskList.filter(el=> el.isDone).map(todo=>   <TaskItem todo={todo} key={todo.id} />)
                 : filter==="notDone" ? taskList.filter(el=> !el.isDone).map(todo=>   <TaskItem todo={todo} key={todo.id} />)
                  : taskList.map(todo => <TaskItem todo={todo} key={todo.id} />    )
            }
        </div>
    )
}

export default TaskList
