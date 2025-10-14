import React, { useState } from 'react';
import './MonthCalendar.css';

const MonthCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 8, 19)); // September 2021, 19th day

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()));
  };

  const handleDateClick = (day) => {
    if (day) {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }
  };

  const isSelectedDate = (day) => {
    return day === currentDate.getDate() &&
           currentDate.getMonth() === 8 && // September
           currentDate.getFullYear() === 2021;
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="calendar-container">
      {/* Header with month/year and navigation */}
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePrevMonth}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10.1831 4.175L6.35811 8L10.1831 11.825L8.99977 13L3.99977 8L8.99977 3L10.1831 4.175Z" fill="#B5BEC6"/>
          </svg>
        </button>

        <h3 className="month-year">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>

        <button className="nav-button" onClick={handleNextMonth}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 11.825L8.825 8L5 4.175L6.18333 3L11.1833 8L6.18333 13L5 11.825Z" fill="#B5BEC6"/>
          </svg>
        </button>
      </div>

      {/* Days of week header */}
      <div className="days-header">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-date ${day ? 'clickable' : 'empty'} ${isSelectedDate(day) ? 'selected' : ''}`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthCalendar;