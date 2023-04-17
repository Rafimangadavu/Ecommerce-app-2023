import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFount';
import Policy from './pages/Policy';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Layout/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';

function App() {
  return (

    <>
    <Routes>
    <Route path='/' element ={< HomePage/>} />
    <Route path="/dashboard" element={<PrivateRoute />}>
    <Route path=''  element={<Dashboard />}/>
    </Route>
    <Route path='/register'  element={<Register />}/>
    <Route path='/forgot-password'  element={<ForgotPassword />}/>
    <Route path='/login'  element={<Login />}/>
    <Route path='/about'  element={<About />} exact />
    <Route path='/contact'  element={<Contact />}/>
    <Route path='/policy'  element={<Policy />}/>    
    <Route path='*'  element={<PageNotFound />}/>
    </Routes>
    <ToastContainer />
    </>   
  );
}

export default App;
