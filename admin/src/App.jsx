import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import ListService from './pages/ListService/ListService'
import AddService from './pages/AddService/AddService'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
	<div>
		<ToastContainer />
		<Navbar/>
		<Routes>
			<Route path='/' element={<ListService/>} />
			<Route path='/addservice' element={<AddService/>} />
		</Routes>
		<Footer/>
	</div>
  )
}

export default App
