
import axios from "axios";
import {CHANGE_LOADING, GET_EMPLOYERS_DATA} from "../actionTypes";

export const changeLoadingAC = (bool)=>{
  return {
    type:CHANGE_LOADING,
    payload:bool
  }
}
export const getEmployeesDataThunk = ()=>async (dispatch)=>{
  dispatch(changeLoadingAC(true))
  try{
    const response = await axios.get(`https://crm.gloss.am/rest/1/6bn6g2lm9fsu8ctm/user.get`)
    dispatch({
      type:GET_EMPLOYERS_DATA,
      payload:response?.data?.result
    })
    console.log("response",response.data.result)
  }catch (e) {
    console.log(e)
  }
  finally {
    dispatch(changeLoadingAC(false))
  }
}