import React, { Component } from 'react'
import image from '../images/img.jpg'
import Typical from 'react-typical';
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
export default class Home extends Component {
    render() {
        return (
            <>
                       
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid pt-lg-0 mt-lg-0">
                    <div className="row">
                        <div className='col-10 mx-auto pt-3'>
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                <strong className="brand-name" style={{color:"#b93c59"}}> Hi, I'm  Shivang Tripathi.</strong>
                                </h1>
                                <div className="my-3">
                                <h2 className="typical">
                                <Typical 
                                    steps={["A Student", 1000, 'A Developer', 700,'A Geek', 700,]}
                                    loop={Infinity}
                                    wrapper="h2"
                                />
                                </h2>
                                </div>
                                <div className="mt-3">
                                    < NavLink to="/contact"  className="btn-know-more">Contact</ NavLink>
                                </div>
                         </div>
                         <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={image} className="img-fluid animated" alt="..."/>
                         </div>
                         </div>
                         </div>
                     </div>
                     </div>
            </section></>
        )
    }
}
