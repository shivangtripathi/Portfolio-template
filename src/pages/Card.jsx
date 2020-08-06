import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Card extends Component {
    render() {
        return (
            <>
            <div className='col-md-4 col-10 '>
                                <div className="card">
                                <img src={this.props.imgsrc} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://github.com/shivangtripathi" target="_blank" className="btn-know-more">Check it out</a>
                                </div>
                                </div>
                                </div>
            </>
        )
    }
}
