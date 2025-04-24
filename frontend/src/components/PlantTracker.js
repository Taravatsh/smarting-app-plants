import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './CommonStyles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function PlantTracker() {
    const [data, setData] = useState({
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Plant Health Index',
                data: [65, 59, 80, 81],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    });

    useEffect(() => {
        return () => {
            // Cleanup function to destroy chart instance
            if (ChartJS.instances[0]) {
                ChartJS.instances[0].destroy();
            }
        };
    }, []);

    return (
        <div className="component-container">
            <h2>Plant Tracker</h2>
            <p>Track the growth and health of your plants over time.</p>
            <Line data={data} />
        </div>
    );
}

export default PlantTracker; 