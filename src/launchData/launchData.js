import React, { useState, useEffect } from "react";
import  '../launchData/style.css';

const LaunchData= props=>{

const {launchData} = props;
    return(
        <>
          <div className="col-sm-4">
            <div className="card " key={launchData["flight_number"]} style={{width: '18rem'}}>
                <img src={launchData["links"]["mission_patch_small"]} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{launchData['mission_name']}</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#popup${launchData['flight_number']}`}>Show Details</a>
                    </div>
            </div>
          </div>  
        </>      
    )
}

export default LaunchData;


