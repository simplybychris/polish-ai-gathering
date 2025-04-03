
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-sm">Dni</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm">Godzin</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm">Minut</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm">Sekund</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
