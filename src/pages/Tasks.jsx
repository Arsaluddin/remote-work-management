import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await API.get('/tasks');
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">Tasks</h1>
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div key={task._id} className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold">{task.title}</h2>
            <p className="mt-2">{task.description}</p>
            <p className="mt-2 text-sm text-gray-600">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p className="mt-2 text-sm text-gray-600">Priority: {task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
