import {CHANGE_LOADING, GET_EMPLOYERS_DATA} from "../actionTypes";

const initialState = {
  employeeData:[],
  loading: false,
  error:null
}

const employeeDataReducer = (state=initialState,action)=>{
  switch (action.type) {
    case GET_EMPLOYERS_DATA:
      return{
        ...state,
        employeeData:action.payload
      }
    case CHANGE_LOADING :
      return{
        ...state,
        loading:action.payload
      }

    default:
      return  state
  }
}
export default employeeDataReducer