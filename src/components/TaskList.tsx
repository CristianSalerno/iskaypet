import { useState } from 'react';
import AddTaskForm from './TaskForm';
import TaskItem from './TaskItem';


const TasksList = () => {
  const [tasks, setTasks] = useState([{ title: 'Tarea 1' }, { title: 'Tarea 2' }, { title: 'Tarea 3' }]);

  const handleAddTask = (newTask: any) => {
    setTasks([...tasks, { title: newTask }]);
  };

  const handleDeleteTask = (index: any) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </ul>
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default TasksList;
