import './UseEffect.css';
import {useEffect, useRef, useState} from "react";


export function UseEffect() {

    const myUseRef = useRef(null);
    const [widthSize, setWidthSize] = useState(0);
    const [heightSize, setHeightSize] = useState(0);

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        myUseRef.current.focus();

        window.onresize = () => {
            setWidthSize(window.innerWidth)
            setHeightSize(window.innerHeight)

            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    }, [])

    return(
        <>
            <div className={"use-effect"}>
                <p>{widthSize} / {heightSize}</p>
                <input ref={myUseRef}/>
                <button>Focus input</button>
                <p>{screenSize.width} / {screenSize.height}</p>
            </div>
        </>
    )
}