import React from 'react';
import MonthCalendar from './MonthCalendar';

const MonthCalendarTest = () => {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontFamily: 'Avenir Next LT Pro',
          color: '#4A5660'
        }}>
          MonthCalendar Component Test
        </h1>
        <MonthCalendar />
      </div>
    </div>
  );
};

export default MonthCalendarTest;
