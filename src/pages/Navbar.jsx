import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className='col-10 mx-auto'>

                <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand"  style={{fontSize:"2em",color: "#b93c59"}}to="/">Shivang  Tripathi</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto" >
      <li className="nav-item active">
        <NavLink activeClassName="menu_active" exact className="nav-link " to="/" style={{color:"#b93c59"}}><span className="up">Ho</span><span className="down">me</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/projects" style={{color:"#b93c59"}}><span className="up">Proj</span><span className="down">ects</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact" style={{color:"#b93c59"}}><span className="up">Contact</span><span className="down"> Us</span></NavLink>
      </li>
    </ul>
  </div>
</nav>

</div>
                    </div>
                </div>
            </div>
        )
    }
}
