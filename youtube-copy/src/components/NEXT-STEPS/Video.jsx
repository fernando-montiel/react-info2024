import './Video.css';
import { useState, useRef } from "react";

export function Video(){
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    const audio = 'https://audioboom.com/posts/8562837.mp3'
    const video = 'https://videos.pexels.com/video-files/1560989/1560989-hd_1280_720_30fps.mp4'

    const handleVideoClick = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? videoRef.current?.pause() : videoRef.current?.play();
    }

    const handleAudioClick = () => {
        setAudioPlaying(!audioPlaying);
        audioPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    }

    return(
        <>
            <div className={'video-container'}>
                <button className={''} onClick={handleVideoClick}>{isPlaying ? 'Pause' : 'Play'}</button>
                <video ref={videoRef} controls width="250">
                    <source src={video}
                            type="video/mp4"/>
                </video>
                <button className={''} onClick={handleAudioClick}>{audioPlaying ? 'Pause' : 'Play'}</button>
                <audio ref={audioRef} controls width="250">
                    <source src={audio}/>
                </audio>
            </div>
        </>
    )
}