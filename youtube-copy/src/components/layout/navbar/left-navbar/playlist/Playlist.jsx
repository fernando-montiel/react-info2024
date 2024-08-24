import './Playlist.css'
import React from "react";

export default function Playlist({isActive, img, title, description}) {

    const activeClassName = isActive ? "active" : "";

    return (
        <li className={`playlist ${activeClassName}`}>
            <img alt={'image'} src={img} />
            <div className={'playlist-text'}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </li>
    )
}