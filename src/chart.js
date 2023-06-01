import React, {Fragment, useEffect} from "react";
import randomcolor from "randomcolor";
// import faker from "faker";
import call from "./icons8-call-50.png";
import video from "./icons8-video-24.png";
import chat from "./icons8-chat-50.png";
import css from "./styles.css"
import data from "./data.json";
import Card from "./card";
import {useDispatch, useSelector} from "react-redux";
import {getEmployeesDataThunk} from "./redux/action/employeeDataAction";
// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

const Chart = () => {
  const {employeeData}=useSelector(state=>state.employeeData)
  const dispatch = useDispatch()
  console.log("employeeData",employeeData)
  useEffect(()=>{
    dispatch(getEmployeesDataThunk())
  },[])
  return (
    <div className="org-tree">
      <Card data={data} employeeData={employeeData}/>
    </div>
  );
};

export default Chart;