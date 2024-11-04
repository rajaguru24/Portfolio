import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Certification from './Components/Certification'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

const App = () => {
  return (
      <div>
<BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/about' element={<Header/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/certification' element={<Certification/>}/>
        <Route path='projects' element={<Projects/>}/> 
        <Route path="/resume" element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>

      
      </Routes>
      </BrowserRouter>
      </div>

  )
}


export default App