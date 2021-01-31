import React from "react";
import  './style.css';

const Card= props=>{

const {launchData} = props;
    return(
          
            <div className="card " key={launchData["flight_number"]} style={{width: '18rem'}}>
                <img src={launchData["links"]["mission_patch_small"]} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{launchData['mission_name']}</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#popup${launchData['flight_number']}`}>Show Details</a>
                    </div>
            </div>
            
    )
}

export default Card;


