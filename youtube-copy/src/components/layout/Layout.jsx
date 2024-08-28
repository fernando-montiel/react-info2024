import './Layout.css';
import {TopNavbar} from "./navbar/top-navbar/TopNavbar.jsx";
import {LeftNavbar} from "./navbar/left-navbar/LeftNavbar.jsx";
import {MusicBar} from "../music-bar/MusicBar.jsx";
import React, {useState} from "react";
import {NewPlaylistForm} from "./navbar/left-navbar/playlist/NewPlaylistForm.jsx";
import {RecommendationContainer} from "../recommendation-container/RecommendationContainer.jsx";
import { recommendationsData } from "../../recommendationData.js";
import {NewCompletePlaylistForm} from "./navbar/left-navbar/playlist/NewCompletePlaylistFrom.jsx";

export function Layout({children}){

    const [playlist, setPlaylist] = useState([]);
    const [isNewPlaylistOpen, setIsNewPlaylistOpen] = useState(false);
    const [isNewCompletePlaylistOpen, setIsNewCompletePlaylistOpen] = useState(false);

    const body = () => {
        return recommendationsData.map((data) => (
            <RecommendationContainer
                key={data.id}
                recommendationTitleObject={data.recommendationTitleObject}
                recommendations={data.recommendations}
                styleType={data.styleType}
                buttonText={data.buttonText}
            />
        ))
    }

    return(
        <div className={'layout'}>
            <TopNavbar profileImage={"./src/assets/top-navbar/Avatar.png"} />
            <LeftNavbar setIsNewPlaylistOpen={setIsNewPlaylistOpen} setIsNewCompletePlaylistOpen={setIsNewCompletePlaylistOpen} isNewCompletePlaylistOpen={isNewCompletePlaylistOpen} playlist={playlist}/>
            {isNewPlaylistOpen && <NewPlaylistForm setIsComplexState={setIsNewPlaylistOpen} setPlaylist={setPlaylist} />}
            {children}
            {isNewCompletePlaylistOpen ? (
                <NewCompletePlaylistForm setIsComplexState={setIsNewCompletePlaylistOpen} setPlaylist={setPlaylist} />
            ) : (
                body()
            )}
            <MusicBar></MusicBar>
        </div>
    )
}