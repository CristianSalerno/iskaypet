import  { useState } from 'react';

const AddTaskForm = ({ onAddTask }: any) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (task) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Nueva tarea" />
      <button type="submit">Añadir tarea</button>
    </form>
  );
};

export default AddTaskForm;
