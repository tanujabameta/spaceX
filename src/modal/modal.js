import  '../modal/style.css';

const Modal = props=>{
    const {launchData} = props;
    return(
        <div className="modal fade" id={`popup${launchData['flight_number']}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{launchData["mission_name"]}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div>
                <img src={launchData["links"]["mission_patch_small"]} className="card-img-top image" alt="..."/>
            </div>
            <div className="modal-body row">
              <div className="col-sm-3">
                <h4>Mission Name</h4>
                <p>{launchData["mission_name"]}</p>
              </div>
              <div className="col-sm-3">
                <h4>Launch Year</h4>
                <p>{launchData["launch_year"]}</p> 
              </div>
              <div className="col-sm-3">
                <h4>Launch Status</h4>
                <p>{launchData["launch_success"]? "Successful": "Failed"}</p>
              </div>
              <div className="col-sm-3">
              <h4>Launch Date</h4>
                <p>{`${launchData["launch_date_local"]}`}</p>
              </div>
            </div>
            <div className="detail row">{launchData["details"]}</div>
            <div className="modal-footer">
              <a href={launchData["links"]["wikipedia"]} type="button" className="btn btn-primary btn-block">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal;
