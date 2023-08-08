import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Product } from './components/pages/Product/Product'
import { NotFound } from './components/NotFound/NotFound'

function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" Components={Main} />
      <Route path="*" Components={NotFound} />
    </Routes>
    <Main /> 
    <Product/>

    </div>
  )
}

export default App
