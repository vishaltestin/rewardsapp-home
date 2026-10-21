'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
    value: number;
    duration?: number;
}

export function Counter({ value, duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = value / (duration / 16); // 60fps
            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return (
        <span ref={ref}>
            {value % 1 === 0 ? count : count.toFixed(1)}
        </span>
    );
}