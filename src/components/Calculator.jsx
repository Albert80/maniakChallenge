import React from "react";
import Slider from '@material-ui/core/Slider';
import Result from "./Result";
import "./Calculator.css";

function Calculator() {
  const [monthly, setMonthly] = React.useState(35);
  const [employees, setEmployees] = React.useState(8);
  const handleMonth = (event, newValue) => {
    setMonthly(newValue);
  };
  const handleEmployees = (event, newValue) => {
    setEmployees(newValue);
  };

  return(
    <div className="calculator-col">
      <div className="calculator-row">
        <p>Monthly ingredient spending</p>
        <input min={10} max={100} className="calculator-input" type="text" value={monthly} onChange={handleMonth} />
      </div>
      <Slider value={monthly} onChange={handleMonth} defaultValue={40} min={10} max={100} step={1.0} />
      <div className="calculator-row">
        <p>Full-time employees that process invoices</p>
        <div className="input-prefix">
          <span className="prefix">$</span>
          <input min={10} max={100} className="calculator-input" type="text" value={employees} onChange={handleEmployees} />
        </div>
        
      </div>
      <Slider color={"#071eb3"} value={employees} onChange={handleEmployees} defaultValue={8} min={1} max={10} step={1.0} />
      <div className="calculator-row">
        <div className="estimate-col">
          <Result>8.611</Result>
        </div>
      </div>
    </div>
  )
}

export default Calculator;