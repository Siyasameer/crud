import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Topbar from './components/Topbar'
import Datatable from './components/Datatable'
import Addform from './components/Addform'
import { Route, Routes } from 'react-router-dom'
import Editform from './components/Editform'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Topbar></Topbar> 
      <Routes>
        <Route path='/' element={<Datatable/>}></Route>
        <Route path='/register' element={<Addform/>}></Route>
        <Route path='/Editform/:id' element={<Editform/>}></Route>
      </Routes>
    </>
  )
}

export default App
