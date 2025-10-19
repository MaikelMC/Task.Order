import { useNavigate } from 'react-router-dom';

export function TaskCard({ task, onDelete }) {
    const navigate = useNavigate();

    return (
    <div className="card p-6 hover:scale-105 transition-transform duration-200">
    <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 flex-1 pr-4">
        {task.titulo}
        </h3>
        <div className="flex space-x-2">
        <button
            onClick={() => navigate(`/tasks/${task.id}`)}
            className="text-blue-500 hover:text-blue-700 transition-colors"
            title="Editar"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </button>
        <button
            onClick={() => {
            if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
                onDelete(task.id);
            }
            }}
            className="text-red-500 hover:text-red-700 transition-colors"
            title="Eliminar"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
        </div>
    </div>
    
    <p className="text-gray-600 leading-relaxed">
        {task.descripcion}
    </p>
    
    <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">
        {new Date(task.created_at || Date.now()).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}
        </span>
        <input type="checkbox" 
        class="ml-4 w-6 h-6 text-green-600 bg-white border-gray-300 rounded
        focus:ring-green-500 
        focus:ring-2 
        focus:ring-offset-2 
        cursor-pointer
        transition-colors
        duration-200
        ease-in-out
        "></input>
    </div>
    </div>
    );
}