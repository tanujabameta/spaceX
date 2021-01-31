 import {
    FETCH_LAUNCHDATA_REQUEST,
    FETCH_LAUNCHDATA_SUCCESS,
    FETCH_LAUNCHDATA_FAILURE,
    FILTER_BY_STATUS,
    FILTER_BY_START_DATE,
    FILTER_BY_END_DATE
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

// export const filterByStatusRequest =(data, status)=>{
//     return{
//         type: FILTER_BY_STATUS,
//         payload: {
//             status:status,
//             items: status==='select'?data: data.filter((data)=>{
//                 return(String(data["upcoming"])=== status);
//             }) 
//         }
//     }
// } 

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

 function filterData1(filterData) {
    const { data, status} = filterData;
    return {
        type: FILTER_BY_STATUS,
        payload: { data, status}
    }

}
function filterData2(filterData) {
    const { data, startDate} = filterData;
    return {
        type: FILTER_BY_START_DATE,
        payload: { data, startDate}
    }
}

function filterData3(filterData) {
    const { data, endDate} = filterData;
    return {
        type: FILTER_BY_END_DATE,
        payload: { data, endDate}
    }
}


export const filterByStatus = (newFilterData) => (dispatch) => {
    const {items, status} = newFilterData;
    const newData = status === 'select'? items: items.filter((item)=>  String(item["upcoming"])=== status);
    dispatch(filterData1({data: newData, status}));
}

 export const filterByStartDate = (newFilterData) => (dispatch) => {
    const {items, startDate} = newFilterData;
    let startDateUnix = startDate.getTime()/1000;
    const newData= items.filter((item)=>(startDateUnix < item["launch_date_unix"]));
    dispatch(filterData2({data: newData, startDate}));
 }

 export const filterByEndDate = (newFilterData) => (dispatch) => {
    const {items, endDate} = newFilterData;
    let endDateUnix = endDate.getTime()/1000;
    const newData= items.filter((item)=>(endDateUnix > item["launch_date_unix"]));
    dispatch(filterData3({data: newData, endDate}));
 }




