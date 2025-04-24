import React, { useState } from 'react';
import './CommonStyles.css';

function PlantArchive() {
    const [plants, setPlants] = useState([
        { name: 'Tomato', disease: 'Blight', management: 'Use copper fungicide' },
        { name: 'Potato', disease: 'Scab', management: 'Rotate crops annually' },
        { name: 'Cucumber', disease: 'Powdery Mildew', management: 'Apply neem oil' },
    ]);

    return (
        <div className="component-container">
            <h2>Plant Archive</h2>
            <p>Access information on various plant species and diseases.</p>
            <ul>
                {plants.map((plant, index) => (
                    <li key={index}>
                        <strong>{plant.name}</strong>: {plant.disease} - {plant.management}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlantArchive; 