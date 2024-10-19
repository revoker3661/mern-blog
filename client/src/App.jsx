import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';


export default function App() {
  return (
  
    <BrowserRouter>
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/project' element={<Projects />} />
        
        </Routes>
  
    </BrowserRouter>
  );
}

