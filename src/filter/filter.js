 import {useState} from 'react';
 import '../filter/style.css';
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";


 
 const Filter =({onStatusChange,onStartDateChange,onEndDateChange,startDate,endDate})=>{
    
    return(<div className='filter'>
        <div className='select'>
        <select name="status" className="selectStatus" onChange={onStatusChange}>
            <option value="select">Select Status</option>
            <option value="true">Upcoming Launches</option>
            <option value="false">Past Launches</option>
        </select>
        </div>
        <div className='sDate'><span className='date'>Start Date:</span><DatePicker className='startDate'selected={startDate} onChange={onStartDateChange} /></div>
        <div className='eDate'><span className='date'>End Date:</span><DatePicker className='endDate' selected={endDate} onChange={onEndDateChange} /></div>
    </div>
    )
}

export default Filter;
