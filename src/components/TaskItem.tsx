

const TaskItem = ({ task, onDelete }: any) => {
  return (
    <li>
      <p>{task.title}</p>
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
