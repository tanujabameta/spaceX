import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import LaunchData from './launchData/launchData';
import Modal from './modal/modal';
import Filter from './filter/filter';

function App() {
  const [launchData, setLaunchData]= useState([]);
  const [selectedStatus, setSelectedStatus]= useState("select");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filteredData, setData] = useState([]);
  

  useEffect(()=>{
    const fetchData= async ()=>{
      const result = await axios.get('https://api.spacexdata.com/v3/launches');
      setLaunchData(result.data);
      setData(result.data);
    };
    fetchData(); 
  },[]);

  const handleStatus=(e)=>{
    setSelectedStatus(e.target.value);
  }

  const handleStart= (date)=>{
    setStartDate(date);
  }

  const handleEnd= (date)=>{
    setEndDate(date);
  }
  
  useEffect(()=>{
    let newData=launchData.filter((launch)=> 
      {
        if(`${selectedStatus}`==="select")
            return launch;
        else
          return(String(launch["upcoming"])===`${selectedStatus}`);
      }
      );
      setData(newData);
  },[selectedStatus])

  useEffect(()=>{
    let startDateUnix = startDate.getTime()/1000;
    let endDateUnix = endDate.getTime()/1000;
    let newData= launchData.filter((launch)=>((startDateUnix < launch["launch_date_unix"])&& (launch["launch_date_unix"]<endDateUnix)));
    setData(newData);
  },[startDate, endDate])
  
  
  return (
    <div className="App">
      <div className="container">
      <div className="nav">
        <div className="spacediv"><h1 className='spacex'>SpaceX</h1></div>
        <div className="filter">
          <Filter onStatusChange={handleStatus} onStartDateChange={handleStart} onEndDateChange={handleEnd} startDate={startDate} endDate={endDate}/></div>
      </div>
       <div className="row">  
            {
              filteredData.map((data, index)=>(
                  <>
                  <LaunchData launchData={data}/>
                  <Modal launchData={data}/>
                  </>
                ))}
                </div>
           </div>
    </div>
  );
}

export default App;
