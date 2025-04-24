import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CommonStyles.css';

function IrrigationSystem() {
    const [schedule, setSchedule] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [wateringTime, setWateringTime] = useState('');

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setWateringTime(schedule[date.toDateString()] || '');
    };

    const handleScheduleSubmit = () => {
        if (selectedDate) {
            setSchedule({
                ...schedule,
                [selectedDate.toDateString()]: wateringTime
            });
            alert(`Scheduled watering at ${wateringTime} on ${selectedDate.toDateString()}`);
        }
    };

    return (
        <div className="component-container">
            <h2>Irrigation System</h2>
            <p>Select a day on the calendar to schedule watering.</p>
            <div className="calendar">
                <Calendar
                    onClickDay={handleDayClick}
                    tileContent={({ date, view }) =>
                        schedule[date.toDateString()] ? <p>Watering at {schedule[date.toDateString()]}</p> : null
                    }
                />
            </div>
            {selectedDate && (
                <div>
                    <h3>Schedule for {selectedDate.toDateString()}</h3>
                    <label htmlFor="wateringTime">Watering Time:</label>
                    <input
                        type="time"
                        id="wateringTime"
                        value={wateringTime}
                        onChange={(e) => setWateringTime(e.target.value)}
                        aria-label="Watering time"
                        style={{ marginBottom: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button
                        onClick={handleScheduleSubmit}
                        aria-label="Set schedule"
                        style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                    >
                        Set Schedule
                    </button>
                </div>
            )}
        </div>
    );
}

export default IrrigationSystem;