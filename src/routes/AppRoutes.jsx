import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Registration from '../pages/Registration';
import Contact from "../pages/Contact";
import Organizing from "../pages/Organizing";
import Advisory from "../pages/Advisory";


const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='organizing-committee' element={<Organizing/>}/>
                <Route path='advisory-committee' element={<Advisory/>}/>
                <Route path='registration' element={<Registration/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes;