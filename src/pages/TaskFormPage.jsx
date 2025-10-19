import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskForm } from '../components/TaskForm';
import { getTask, createTask, updateTask } from '../api/tasks.api';

export function TaskFormPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      loadTask();
    } else {
      setLoading(false);
    }
  }, [params.id]);

  const loadTask = async () => {
    try {
      const response = await getTask(params.id);
      setTask(response.data);
    } catch (error) {
      console.error('Error al cargar tarea:', error);
      alert('Error al cargar la tarea');
      navigate('/tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (params.id) {
        await updateTask(params.id, formData);
      } else {
        await createTask(formData);
      }
      navigate('/tasks');
    } catch (error) {
      console.error('Error al guardar tarea:', error);
      alert('Error al guardar la tarea');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TaskForm task={task} onSubmit={handleSubmit} />
    </div>
  );
}