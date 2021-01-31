import React,{useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchLaunchData} from './redux'; 
import Card from './card/card';
import Modal from './modal/modal';
import Filter from './filter/filter';


function App({launchData, fetchLaunchData}) {
  
  useEffect(()=>{
     fetchLaunchData();
  },[]);

  return (
    <div className="App">
      <div className="container">
      <div className="nav">
        <div className="spacediv"><h1 className='spacex'>SpaceX</h1></div>
        <div className="filter">
          <Filter/>
        </div>
      </div>
       <div className="row">  
          {launchData &&
              launchData.filteredItems&&
              launchData.filteredItems.map((data, index)=>(
              <div className="col-sm-4" key= {index}>
                  <Card launchData={data}/>
                  <Modal launchData={data}/>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps=state=>{
  return{
    launchData: state.launchData
  }
}


export default connect(mapStateToProps,{fetchLaunchData})(App);
