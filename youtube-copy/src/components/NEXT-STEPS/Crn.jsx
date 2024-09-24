import {useRef, useState} from "react";
import './Crn.css';

export function Crn(){

    const [timePassed, setTimePassed] = useState(0);
    const timerId = useRef(null);

    const startTimer = () => {
        if (!timerId.current) {
            timerId.current = setInterval(() => setTimePassed((prev) => prev + 1), 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = null;
    };

    const resetTimer = () => {
        setTimePassed(0);
    }

    return(
        <>
            <div className={'crn'}>
                <p className={'crn-p'}>{`Time passed: ${timePassed}`}</p>
                <div className={'crn-buttons'}>
                    <button className={'crn-button'} onClick={startTimer}>Start</button>
                    <button className={'crn-button'} onClick={stopTimer}>Stop</button>
                </div>
                <button className={'crn-button reset'} onClick={resetTimer}>Reset</button>
            </div>
        </>
    )
}