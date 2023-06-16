import { useEffect } from 'react';

export const useInterval = (callback, delay) => {
    useEffect(() => {
        callback()

        const interval = setInterval(() => {
            callback()
        }, delay);

        return () => clearInterval(interval)

    },[]);
} 