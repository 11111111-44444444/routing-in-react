import React from 'react'
import Home from './component/home';
import Error from './component/error';
import Contact from './component/contact';
import About from './component/about';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
<Router>
    <div>
      <h1> hi aliakbar</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'*'}>Error</Link>
      
      






      <Routes>
<Route path ='/' element={<Home/>}/>
<Route path ='/about' element={<About/>}/>
<Route path ='/contact' element={<Contact/>}/>
<Route path ='*' element={<error/>}/>




        </Routes> 


    </div>
</Router>


  )
}

export default App