import {combineReducers} from "redux";
import employeeDataReducer from "./employeeDataReducer";


const rootReducer = combineReducers({
  employeeData:employeeDataReducer
})
export default rootReducer