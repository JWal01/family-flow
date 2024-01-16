import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarPage.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
}

export default MyCalendar;
