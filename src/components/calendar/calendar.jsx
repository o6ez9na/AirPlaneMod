import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  return (
    <div>
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
      <DatePicker
        showIcon
        selected={startDate}
        defaultValue={new Date()}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy"
        />
        
    </div>
  );
};

export default Calendar;