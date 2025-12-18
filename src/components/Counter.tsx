import { useEffect, useState } from "react";

interface CounterProps {
    end: number;
    duration?: number; // ms
    suffix?: string;
    delayBetweenLoops?: number; // ms
}

const Counter: React.FC<CounterProps> = ({
    end,
    duration = 4000,
    suffix = "",
    delayBetweenLoops = 3000,
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        let interval: number;
        let timeout: number;

        const startCounter = () => {
            start = 0;
            const increment = end / (duration / 16);

            interval = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(interval);

                    // ⏸ thoda ruk ke dubara start
                    timeout = setTimeout(() => {
                        setCount(0);
                        startCounter();
                    }, delayBetweenLoops);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
        };

        startCounter();

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [end, duration, delayBetweenLoops]);

    return (
        <h1>
            {count.toLocaleString()}
            {suffix}
        </h1>
    );
};

export default Counter;
