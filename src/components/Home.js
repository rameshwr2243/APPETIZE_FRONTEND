import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import image6 from '../images/image6.png'; // Adjust the path according to your project structure
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import AboutUs from './AboutUs'; // Import the AboutUs component

const API_URL = process.env.REACT_APP_API_URL || "https://appetize.onrender.com";

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make an API request to the backend
        axios.get(`${API_URL}/your-endpoint`)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <Box sx={{ textAlign: 'center', padding: '0' }}>
            <Box sx={{
                position: 'relative',
                height: '100vh', // Full viewport height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden' // Prevent overflow
            }}>
                <img 
                    src={image6} 
                    alt="Appetite Logo" 
                    style={{
                        width: '100%', // Full width
                        height: '100%', // Full height
                        objectFit: 'cover', // Cover the entire area
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }} 
                />
            </Box>

            {/* Displaying data fetched from API */}
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <Box>
                    <Typography variant="h4">Fetched Data:</Typography>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </Box>
            )}

            {/* Image Slider */}
            <ImageSlider />

            {/* About Us Section */}
            <AboutUs />
        </Box>
    );
};

export default Home;
