import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CommonStyles.css';

function IrrigationScheduler() {
    const [schedule, setSchedule] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleAddSchedule = () => {
        setSchedule([...schedule, selectedDate.toLocaleDateString()]);
    };

    return (
        <div className="component-container">
            <h2>Irrigation Scheduler</h2>
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            <button onClick={handleAddSchedule}>Add Schedule</button>
            <ul>
                {schedule.map((date, index) => (
                    <li key={index}>{date}</li>
                ))}
            </ul>
        </div>
    );
}

export default IrrigationScheduler; 