import React, { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import IrrigationScheduler from './components/IrrigationScheduler';
import PlantTracker from './components/PlantTracker';
import PlantArchive from './components/PlantArchive';
import IrrigationSystem from './components/IrrigationSystem';
import './components/CommonStyles.css';

function App() {
  const [activeTab, setActiveTab] = useState('ImageUpload');

  const renderComponent = () => {
    switch (activeTab) {
      case 'ImageUpload':
        return <ImageUpload />;
      case 'IrrigationScheduler':
        return <IrrigationScheduler />;
      case 'IrrigationSystem':
        return <IrrigationSystem />;
      case 'PlantTracker':
        return <PlantTracker />;
      case 'PlantArchive':
        return <PlantArchive />;
      default:
        return <ImageUpload />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Farming Application</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('ImageUpload')}>Image Upload</button>
          <button onClick={() => setActiveTab('IrrigationScheduler')}>Irrigation Scheduler</button>
          <button onClick={() => setActiveTab('IrrigationSystem')}>Irrigation System</button>
          <button onClick={() => setActiveTab('PlantTracker')}>Plant Tracker</button>
          <button onClick={() => setActiveTab('PlantArchive')}>Plant Archive</button>
        </div>
        <div className="component-container">
          {renderComponent()}
        </div>
      </header>
    </div>
  );
}

export default App;
