import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFount';
import Policy from './pages/Policy';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' index element ={<HomePage />} exact />
    <Route path='/about'  element={<About />} exact />
    <Route path='/contact'  element={<Contact />}/>
    <Route path='/policy'  element={<Policy />}/>
    <Route path='*'  element={<PageNotFound />}/>
    </Routes>
    </>   
  );
}

export default App;
