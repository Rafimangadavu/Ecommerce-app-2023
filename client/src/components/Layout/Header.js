import React from 'react'
import{ NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
  const [auth, setAuth] = useAuth()

  const handleLogout = () =>{
    setAuth({
      ...auth, user:null,token:''
    })
    localStorage.removeItem('auth')
    toast.success("Logout Successfully")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand">
      <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
</svg> Ecommerce App</Link>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link " >Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/category" className="nav-link " >Category</NavLink>
        </li>
        
        {!auth.user ? (<>
          <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
        </li>
        </>) : (<>
          <li className="nav-item">
          <NavLink to="/login" onClick = {handleLogout}className="nav-link" href="#">Logout</NavLink>
        </li>
        </>)}

        

        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#">Cart(0)</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
 
    </>
  )
}

export default Header