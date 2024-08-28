import React, {useState} from 'react';
import './LeftNavbar.css';
import homeIcon from '../../../../assets/left-navbar/home.png';
import exploreIcon from '../../../../assets/left-navbar/explore.png';
import musicIcon from '../../../../assets/left-navbar/music.png';
import Playlist from "./playlist/Playlist.jsx";

export function LeftNavbar({setIsNewPlaylistOpen, playlist}){
    const img = 'https://th.bing.com/th/id/R.6f442ee6df5cf3ccf2a1eee96064f987?rik=Pas5705URUKaAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f6%2f6%2f1199690-4k-ultra-hd-nature-wallpaper-3840x2160-for-android-50.jpg&ehk=XnBoqrBdnfvdRVc5VoOt0tZzzhiXJ%2f9hxZq%2bZpBmq0o%3d&risl=&pid=ImgRaw&r=0'
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
                <div className={'playlist-container'}>
                    <button className={'new-playlist-btn'} onClick={() => setIsNewPlaylistOpen(true)}>
                        <img alt={'add-playlist'} src={'./src/assets/left-navbar/playlist/plus.png'}/>
                        <p>New playlist</p>
                    </button>
                    <button className={'new-playlist-btn'}>
                        <img alt={'add-complete-playlist'} src={'./src/assets/left-navbar/playlist/plus.png'}/>
                        <p>New complete playlist</p>
                    </button>
                    <ul>
                        {playlist.map((list) => (
                            <Playlist key={list.id} isActive={false} img={list.image} title={list.title}
                                      description={list.description}/>
                        ))}
                        <Playlist isActive={true} title={'Relax'} description={'Fernando Ezequiel Montiel'}
                                  img={'https://th.bing.com/th/id/OIP.2HdtA159rfeGAjSJH6yFKQHaEo?w=277&h=180&c=7&r=0&o=5&pid=1.7'}></Playlist>
                        <Playlist isActive={false} title={'Religion'} description={'Fernando Ezequiel Montiel'}
                                  img={'https://i.pinimg.com/originals/8f/19/4a/8f194a79a6161349d143ba2e347e8234.jpg'}></Playlist>
                        <Playlist isActive={false} title={'Rock'} description={'Fernando Ezequiel Montiel'}
                                  img={'https://cdn.wallpapersafari.com/97/87/LdECwe.jpg'}></Playlist>
                    </ul>
                </div>
            </nav>
        </>
    );
}

