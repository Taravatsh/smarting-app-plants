import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import './CommonStyles.css';

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [diseaseResult, setDiseaseResult] = useState('');
    const [useCamera, setUseCamera] = useState(false);
    const webcamRef = useRef(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (myRef.current) {
            console.log('Ref is set:', myRef.current);
        }
    }, []);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const captureImage = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        fetch(imageSrc)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "captured_image.jpg", { type: "image/jpeg" });
                setSelectedFile(file);
            });
    };

    const handleImageUpload = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);

            try {
                const response = await fetch('http://localhost:5002/detect-disease', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const result = await response.json();
                    setDiseaseResult(result.disease);
                } else {
                    console.error('Error detecting disease');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className="component-container">
            <h2>Upload or Capture Plant Image for Disease Detection</h2>
            <button onClick={() => setUseCamera(!useCamera)}>
                {useCamera ? 'Switch to Upload' : 'Switch to Camera'}
            </button>
            {useCamera ? (
                <div>
                    <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
                    <button onClick={captureImage}>Capture Image</button>
                </div>
            ) : (
                <form onSubmit={handleImageUpload}>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">Detect Disease</button>
                </form>
            )}
            {diseaseResult && <p>Disease Detected: {diseaseResult}</p>}
        </div>
    );
}

export default ImageUpload; 