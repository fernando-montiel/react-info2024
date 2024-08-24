import './Layout.css';
import {TopNavbar} from "./navbar/top-navbar/TopNavbar.jsx";
import {LeftNavbar} from "./navbar/left-navbar/LeftNavbar.jsx";
import {MusicBar} from "../music-bar/MusicBar.jsx";
import {useState} from "react";
import {NewPlaylistForm} from "./navbar/left-navbar/playlist/NewPlaylistForm.jsx";

export function Layout({children}){

    const [playlist, setPlaylist] = useState([]);
    const [isNewPlaylistOpen, setIsNewPlaylistOpen] = useState(false);

    return(
        <div className={'layout'}>
            <TopNavbar profileImage={"./src/assets/top-navbar/Avatar.png"} />
            <LeftNavbar setIsNewPlaylistOpen={setIsNewPlaylistOpen} playlist={playlist}/>
            {isNewPlaylistOpen && <NewPlaylistForm setIsComplexState={setIsNewPlaylistOpen} setPlaylist={setPlaylist} />}
            {children}
            <MusicBar></MusicBar>
        </div>
    )
}