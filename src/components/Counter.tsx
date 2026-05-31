import { useEffect, useState, useRef } from "react";

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    delayBetweenLoops?: number;
}

const Counter: React.FC<CounterProps> = ({
    end,
    duration = 4000,
    suffix = "",
    delayBetweenLoops = 3000,
}) => {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number>(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        const startCounter = () => {
            const startTime = performance.now();

            const tick = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // easeOutQuart — smooth deceleration
                const eased = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(eased * end));

                if (progress < 1) {
                    rafRef.current = requestAnimationFrame(tick);
                } else {
                    setCount(end);
                    timeoutRef.current = setTimeout(() => {
                        setCount(0);
                        startCounter();
                    }, delayBetweenLoops);
                }
            };

            rafRef.current = requestAnimationFrame(tick);
        };

        startCounter();

        return () => {
            cancelAnimationFrame(rafRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
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