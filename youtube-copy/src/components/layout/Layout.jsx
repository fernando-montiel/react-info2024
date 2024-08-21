import './Layout.css';
import {TopNavbar} from "./navbar/top-navbar/TopNavbar.jsx";
import {LeftNavbar} from "./navbar/left-navbar/LeftNavbar.jsx";
import {MusicBar} from "../music-bar/MusicBar.jsx";

export function Layout({children}){
    return(
        <div className={'layout'}>
            <TopNavbar profileImage={"./src/assets/top-navbar/Avatar.png"} />
            <LeftNavbar />
            {children}
            <MusicBar></MusicBar>
        </div>
    )
}