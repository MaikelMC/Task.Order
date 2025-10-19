import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500';
    };

    return (
    <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            </div>
            <span className="text-2xl font-bold text-gray-800">TaskOrder</span>
        </Link>
    
        <div className="flex space-x-6">
            <Link to="/" className={`transition-colors duration-200 ${isActive('/')}`}>
            Inicio
            </Link>
            <Link to="/tasks" className={`transition-colors duration-200 ${isActive('/tasks')}`}>
            Tareas
            </Link>
        </div>
        </div>
    </div>
    </nav>
    );
}