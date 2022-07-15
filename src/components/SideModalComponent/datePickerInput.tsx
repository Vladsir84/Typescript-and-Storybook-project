import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerInput = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div style={{marginRight: "80px"}}>
      <DatePicker
        className="datepicker-input"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        // dateFormat="yyyy/MM/dd"
        // showYearDropdown
      />
    </div>
  );
};

export default DatePickerInput;
