
import { Moon, Sun } from 'lucide-react';
import './App.css'
import { useTheme } from './context/ThemeContex';
import Header from './sections/Header'

import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom"
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';

function App() {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className='bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white font-inter min-h-screen '>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>

      <Header />

      <button
        onClick={toggleTheme}
        className='fixed bottom-4 right-4  flex justify-center items-center border border-gray-400 dark:border-white/20 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900'>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  )
}

export default App
