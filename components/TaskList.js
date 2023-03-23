// "use client";

import { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <>
      <h1 style={{ marginTop: '15px' }}>Tasks</h1>
      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <Task
                task={task}
                onChange={onChangeTask}
                onDelete={onDeleteTask}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;