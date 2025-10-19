import { TaskCard } from './TaskCard';

export function TaskList({ tasks, onDelete }) {
    if (tasks.length === 0) {
    return (
        <div className="text-center py-16">
        <div className="inline-block p-8 bg-white rounded-full shadow-md mb-4">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No hay tareas</h3>
        <p className="text-gray-500">Comienza creando tu primera tarea</p>
        </div>
    );
    }

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
    </div>
    );
}