import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import Service from './pages/Service/Service'
import Item from './pages/Item/Item'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/service'>
          <Route path=':serviceId' element={<Item/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
