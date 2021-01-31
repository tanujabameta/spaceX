 import {
    FETCH_LAUNCHDATA_REQUEST,
    FETCH_LAUNCHDATA_SUCCESS,
    FETCH_LAUNCHDATA_FAILURE,
    FILTER
 } from './launchDataType'; 

 import axios from 'axios'; 
 
 
 export const fetchLaunchDataRequest =()=>{
     return{
         type: FETCH_LAUNCHDATA_REQUEST
     }
 } 

 export const fetchLaunchDataSuccess =(launchData)=>{
    return{ 
        type: FETCH_LAUNCHDATA_SUCCESS,
        payload: launchData
    }
} 
export const fetchLaunchDataFailure=(error)=>{
    return{
        type: FETCH_LAUNCHDATA_FAILURE,
        payload: error

    }
} 

export const fetchLaunchData = () =>{
    return (dispatch)=>{
        dispatch(fetchLaunchDataRequest);
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(response=>{
            const launchData= response.data;
            dispatch(fetchLaunchDataSuccess(launchData));
        })
        .catch(error=>{
            const errorMsg= error.message; 
            dispatch(fetchLaunchDataFailure(errorMsg )); 
        })
    }
}

 function filterData(filterData) {
    const { data, status, startDate, endDate} = filterData;
    const payload = { data };
    if( status) payload['status'] = status;
    if( startDate ) payload['startDate'] = startDate;
    if( endDate ) payload['endDate'] = endDate;
    return {
        type: FILTER,
        payload
    }
}

export const filterItems = (newFilterData) => (dispatch) => {
    const {items, status, startDate, endDate} = newFilterData;
    let newData = [...items];
    if(status !== 'select') {
        newData = items.filter((item)=>  String(item["upcoming"])=== status);
    }
    console.log(startDate, status,  status !== "true") 
    if(startDate &&   status !== "true") {
        const startDateUnix = startDate.getTime()/1000;
        console.log(startDateUnix, newData[0]["launch_date_unix"])
        newData= newData.filter((item)=> startDateUnix < item["launch_date_unix"]);
    } 
    if(endDate &&   status !== "true") {
        const endDateUnix = endDate.getTime()/1000;
        newData= newData.filter((item)=> endDateUnix > item["launch_date_unix"]);
    }
    console.log(newData)

    dispatch(filterData({data: newData, status, startDate, endDate}));
}






