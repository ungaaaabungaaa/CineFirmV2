'use client'
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/Loading.json'; // Or wherever your JSON file is

const Loading = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Prevent rendering on the server-side
    return null;
  }

  return (
    <div style={loadingContainerStyle}>
        <Lottie animationData={animationData} loop={true} style={lottieStyle} />
    </div>
  );
};

// Styling for the container (background)
const loadingContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black background with opacity 0.8
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };
  
  // Styling for the Lottie animation (55% width)
  const lottieStyle = {
    width: '35%', // Set width to 55%
  };
export default Loading;