import React, { useState, useEffect } from 'react';

function Counter() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = window.setInterval(() => {
        setTime(time => time + 1);
        }, 1000);
        return () => {
        window.clearInterval(timer);
        };
    }, []);

    return (
        <div>Seconds: {time}</div>
    );
}

export default Counter;