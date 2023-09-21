import { useEffect, useState } from 'react'
import { getTime } from '../../utils/time';

export const Clock = ({timezone}) => {
    const [time, setTime] = useState(getTime(timezone));

    useEffect(() => {
        setInterval(() => {
            setTime(getTime(timezone))
        }, 1000);
    }, []);
    
    return (<>{time}</>)
}