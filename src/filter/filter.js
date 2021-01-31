import '../filter/style.css';
import {connect} from 'react-redux';
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
 import {filterByStatus, filterByStartDate, filterByEndDate} from '../redux'; 


 const Filter =({filterByStatus, items, filterByStartDate, filterByEndDate,startDate,endDate})=>{
    
    return(<div className='filter'>
        <div className='select'>
        <select name="status" className="selectStatus" onChange={(e)=> filterByStatus({items: items, status: e.target.value }) }>
            <option value="select">Select Status</option>
            <option value="true">Upcoming Launches</option>
            <option value="false">Past Launches</option>
        </select>
        </div>
        <div className='sDate'><span className='date'>Start Date:</span><DatePicker className='startDate'selected={startDate} onChange={date=> filterByStartDate({items: items, startDate: date})}/></div>
        <div className='eDate'><span className='date'>End Date:</span><DatePicker className='endDate' selected={endDate} onChange={date=> filterByEndDate({items: items, endDate: date})} /></div>
    </div>
    )
}

const mapStateToProps= state =>({
    items: state.launchData.items,
    filteredItems: state.launchData.filteredItems,
    status: state.launchData.status,
    startDate: state.launchData.startDate,
    endDate: state.launchData.endDate
})

  
export default connect(mapStateToProps,{filterByStatus,filterByStartDate,filterByEndDate})(Filter);
