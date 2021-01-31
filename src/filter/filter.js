import '../filter/style.css';
import {connect} from 'react-redux';
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
 import {filterItems} from '../redux'; 


 const Filter =({filterItems, items,startDate,endDate, status})=>{
    
    return(<div className='filter'>
        <div className='select'>
        <select name="status" className="selectStatus" onChange={(e)=> filterItems({items: items, status: e.target.value, startDate, endDate }) }>
            <option value="select">Select Status</option>
            <option value="true">Upcoming Launches</option>
            <option value="false">Past Launches</option>
        </select>
        </div>
        <div className='sDate'><span className='date'>Start Date:</span><DatePicker className='startDate'selected={startDate} onChange={date=> filterItems({items: items, startDate: date, status, endDate})}/></div>
        <div className='eDate'><span className='date'>End Date:</span><DatePicker className='endDate' selected={endDate} onChange={date=> filterItems({items: items, endDate: date, status, startDate})} /></div>
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

  
export default connect(mapStateToProps,{filterItems})(Filter);
