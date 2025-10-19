import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const navigate = useNavigate();

    return (
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bienvenido a <span className="text-blue-600">TaskOrder</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Organiza tus tareas de manera simple y efectiva
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Crea tareas</h3>
            <p className="text-gray-600">Añade nuevas tareas fácilmente con título y descripción</p>
        </div>
        
        <div className="card p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Organiza</h3>
            <p className="text-gray-600">Mantén todas tus tareas ordenadas en un solo lugar</p>
        </div>
        
        <div className="card p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Completa</h3>
            <p className="text-gray-600">Edita o elimina tareas cuando las completes</p>
        </div>
        </div>
        
        <button
            onClick={() => navigate('/tasks')}
            className="btn-primary text-lg px-8 py-4"
        >
            Ver mis tareas
        </button>
        </div>
    </div>
    );
}