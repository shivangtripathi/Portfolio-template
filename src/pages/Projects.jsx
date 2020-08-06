import React, { Component } from 'react'
import Card from '../pages/Card'
import Data from '../pages/Projectdata'
export default class Projects extends Component {
    render() {
        return (
            <>
            <div className="my-5 br-2">
                <h1 className='text-center' style={{fontSize:'4em',color:'#b93c59'}}>Projects</h1>
                </div>
            <div className="container-fluid mb-5">
                    <div className="row ">
                        <div className='col-10 mx-auto'>
                            <div className='row gy-4'>
                             {Data.map((val,indx)=>{
                                 return <Card key={indx} imgsrc={val.imgsrc} title={val.title} />
                             })}
                            </div>
                        </div>
                    </div>        
            </div>
            </>
        )
    }
}
