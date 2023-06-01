import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Chart_ } from "./Chart_";
import { getEmployeesDataThunk } from "./redux/action/employeeDataAction";
import "./styles.css";
import Chart from "./chart";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesDataThunk());
  }, []);

  return (
    <div className="App">
      {/*<div className="header"></div>*/}
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}
