import React, { useEffect } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { Get_postes } from './redux/actions/actionPoste'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar"
import Home from './components/Home';
import ProductList from './components/products/ProductList';
import Profile from './components/Profile';
import PrivteRouter from './components/PrivteRouter';
export default function App() {
const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(Get_postes())
  },[dispatch])
  const Allpostes=useSelector((state)=>state.poste)
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product' element={<ProductList data={Allpostes} />}/>
      <Route path='/profile' element={
        <PrivteRouter>
          <Profile />
        </PrivteRouter>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

