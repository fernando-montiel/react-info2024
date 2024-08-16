import React from 'react';
import './LeftNavbar.css';
import homeIcon from '../../assets/left-navbar/home.png';
import exploreIcon from '../../assets/left-navbar/explore.png';
import musicIcon from '../../assets/left-navbar/music.png';

export function LeftNavbar(){
    return(
        <>
            <nav className={'left-navbar'}>
                <ul className={'left-navbar__menu'}>
                    <li className={'left-navbar__menu-item left-navbar__menu-item--active'}>
                        <img src={homeIcon} alt={'home-icon'}/>
                        <p> Home </p>
                    </li>
                    <li className={'left-navbar__menu-item'}>
                        <img src={exploreIcon} alt={'explore-icon'}/>
                        <p> Explore </p>
                    </li>
                    <li className={'left-navbar__menu-item'}>
                        <img src={musicIcon} alt={'music-icon'}/>
                        <p> Library </p>
                    </li>
                </ul>
                <div className={'left-navbar__border'}></div>
            </nav>
        </>
    );
}

