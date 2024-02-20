import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Dashbord from './Pages/Dashbord';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Sign-in" element={<SignIn/>}/>
          <Route path="/Sign-Up" element={<SignUp/>}/>
          <Route path="/dashbord" element={<Dashbord/>}/>
        </Routes>
      </BrowserRouter>
      
   
  )
}
