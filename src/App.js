
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  return (
    
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">  
   <Header/>
   <Dashboard/>
   </div>
    
  );
}

export default App;
