import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import { Main } from './components/Main/Main'
import {AboutMe} from './components/pages/AboutMe/AboutMe'
import { ContactUs } from './components/pages/ContacUs/ContactUs'
import { NotFound } from './components/NotFound/NotFound'
import { Footer } from './components/Footer/Footer'
import { Store } from './components/pages/Store/Store'

function App() {
  return (
    
    <div className='bg-fondo bg-no-repeat bg-cover'>
    <Header />
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/about me" Component={AboutMe} />
      <Route path="/contact us" Component={ContactUs} />
      <Route path="store" Component={Store} />
      <Route path="*" Component={NotFound} />
    </Routes> 
    <Footer />
    </div>
  )
}

export default App
