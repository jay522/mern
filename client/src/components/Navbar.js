import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { NavLink } from 'react-router-dom';
import logo from "../img/vip.jpg";
import { userContext } from '../App';

const Navbar = () => {
  const {state,dispatch} = useContext(userContext);

  const RenderMenu=()=>{
    if(state){
      return(
        <>
          <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    }else {
        return(
          <>
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">SignUp</NavLink>
            </li>
          </>
        )
      }
    }

    return (
        <>
          <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                  <nav className="navbar navbar-expand-lg">
                   <div className="container-fluid">
                    <NavLink to="/"><img src={logo} alt="logo" height="60px" width="70px" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse navi" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <RenderMenu />
                      </ul>
                    </div>
                  </div>
                 </nav>
                </div>
            </div>
          </div>
        </>
    )
}

export default Navbar
