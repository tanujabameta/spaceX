import {
    FETCH_LAUNCHDATA_REQUEST,
    FETCH_LAUNCHDATA_SUCCESS,
    FETCH_LAUNCHDATA_FAILURE,
    FILTER_BY_STATUS,
    FILTER_BY_START_DATE,
    FILTER_BY_END_DATE
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
        case FILTER_BY_STATUS:
            return {
                ...state,
                filteredItems: [...action.payload.data],
                status: action.payload.status
            }
        case FILTER_BY_START_DATE:
            return {
                    ...state,
                    filteredItems: [...action.payload.data],
                    startDate: action.payload.startDate,
                }
        case FILTER_BY_END_DATE:
            return {
                     ...state,
                    filteredItems: [...action.payload.data],
                    endDate: action.payload.endDate,
                    }
        default: return state
    }
}

