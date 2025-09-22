import React from 'react'
import Navbar from "../components/Navbar"
import RateLimitedUI from '../components/RateLimitedUI';
import { useState } from 'react';
const HomePage = () => {
const [isRateLimited, setIsRateLimited] = useState(true);
  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;