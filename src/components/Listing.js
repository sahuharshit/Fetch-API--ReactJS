import React from 'react'
import {Component} from 'react'
import './stylesheet/Listing.css'

const Listing = (props)=>{
    return(
        <div>
                {props.prop}
                <div className="card mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">{props.firstname} <span> {props.lastname} </span></h5>
                        <p className="card-text">{props.location}</p>
                    </div>
                </div>
        </div>
    )
};

export default Listing