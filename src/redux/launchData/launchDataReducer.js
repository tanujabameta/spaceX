import {
    FETCH_LAUNCHDATA_REQUEST,
    FETCH_LAUNCHDATA_SUCCESS,
    FETCH_LAUNCHDATA_FAILURE,
    FILTER
 } from './launchDataType'; 

const initialState = {
 loading : false,
 error: '',
 filteredItems:[],
 status: "select",
 startDate: new Date(),
 endDate: new Date()
}

export default function reducer(state = initialState, action)  {
    switch(action.type) {
        case FETCH_LAUNCHDATA_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_LAUNCHDATA_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...action.payload],
                filteredItems: [...action.payload],
                error:''
            }
        case FETCH_LAUNCHDATA_FAILURE:
            return {
                ...state,
                loading: false,
                items: [],
                filteredItems:[],
                error: action.payload
            }
        case FILTER:
            const filterPayload = action.payload;
            const { data, status, startDate, endDate} = filterPayload;
            const payload = { filteredItems: [...data] };
            if( status) payload['status'] = status;
            if( startDate) payload['startDate'] = startDate;
            if( endDate) payload['endDate'] = endDate;
            return {
                ...state,
                ...payload
            }
        
        default: return state
    }
}

