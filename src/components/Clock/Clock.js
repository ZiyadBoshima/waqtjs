import { useEffect, useState } from 'react'
import { getTime } from '../../utils/time';

export const Clock = (settings) => {
    const [time, setTime] = useState(getTime(settings));
    
    useEffect(() => {
        setInterval(() => {
            setTime(getTime(settings))
        }, 1000);
    }, []);
    
    return (<>{time}</>)
}