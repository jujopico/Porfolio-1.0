import React from 'react'
import {NavLink} from 'react-router-dom'
import { withRouter } from "react-router";
import './Navbar.css'
import Selfie from '../Selfie/Selfie'
import Footer from '../Footer/Footer'


const Navbar = props => {
  return(
    <div className="navbarContainer">
      <div className="sectionSelfie">
        <Selfie />
      </div>
      <div className="sectionNav">
        <nav>
          <NavLink className={props.location.pathname === "/" ? "active" : "inactive"} exact to="/">
            HOME
          </NavLink>
          <NavLink className={props.location.pathname === "/projects" ? "active" : "inactive"} to="/projects">
            PROJECTS
            </NavLink>
          <NavLink className={props.location.pathname === "/contact" ? "active" : "inactive"} to="/contact">
            CONTACT
          </NavLink>
        </nav>
      </div>
      <div className="sectionFooter">
        <Footer />
      </div>
    </div>
  )
}

export default withRouter(Navbar) 
