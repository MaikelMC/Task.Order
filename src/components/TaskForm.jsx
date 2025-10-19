import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function TaskForm({ task, onSubmit }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
    titulo: '',
    descripcion: ''
    });

    useEffect(() => {
    if (task) {
        setFormData({
        titulo: task.titulo,
        descripcion: task.descripcion
        });
    }
    }, [task]);

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    };

    return (
    <form onSubmit={handleSubmit} className="card p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {task ? 'Editar Tarea' : 'Nueva Tarea'}
        </h2>
    
        <div className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Título
            </label>
            <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="input-field"
            placeholder="Ingresa el título de la tarea"
            required
            />
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción
            </label>
            <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="input-field min-h-[150px] resize-y"
            placeholder="Describe los detalles de la tarea"
            required
            />
        </div>
        
        <div className="flex space-x-4 pt-4">
            <button type="submit" className="btn-primary flex-1">
            {task ? 'Actualizar' : 'Crear'} Tarea
            </button>
            <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="btn-secondary"
            >
            Cancelar
            </button>
        </div>
        </div>
    </form>
    );
}