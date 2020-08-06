import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <>
            <div className="my-5">
                <h1 className="text-center" style={{color:"#b93c59"}}> Let's Talk . </h1>
            </div>
            <div className="conatiner contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form>
                                  <div class="form-group p-2">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" class="form-control" id="fullName" placeholder="Enter your full name" />
                                </div>
                                <div class="form-group p-2">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="form-group p-2">
                                    <label for="exampleFormControlTextarea1">Suggestions & Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                <a href="#" class="btn-know-more">Submit Form</a>
                                </div>
                </form>
                  </div>
                </div>
            </div>
            </>
        )
    }
}
