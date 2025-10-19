import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TaskFormPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;