"use client";

import { useReducer } from "react";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import Link from "next/link";

// export const metadata = {
//   title: 'Tasks Route',
// };
let nextId = 3;

const Tasks = () => {
  const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
  ];

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    // console.log(nextId);
    // console.log(nextId++);
    dispatch({
      type: 'added',
      id: nextId++,
      // id: tasks.length + 1,
      text: text
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>Prague Itinerary</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );

  function tasksReducer(tasks, action) {
    switch(action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: false
        }];
      }
      case 'changed': {
        return tasks.map(t => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== action.id);
      }
      default: {
        throw Error(`Unknown action ${action.type}`);
      }
    }
  }
};

export default Tasks;