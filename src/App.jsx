
import { Moon, Sun } from 'lucide-react';
import './App.css'
import { useTheme } from './context/ThemeContex';
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

function App() {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className='bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white font-inter min-h-screen '>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <button
        onClick={toggleTheme}
        className='fixed bottom-4 right-4  flex justify-center items-center border border-gray-400 dark:border-white/20 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900'>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  )
}

export default App
