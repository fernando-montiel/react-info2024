import './MusicBar.css';

export function MusicBar(){
    return(
        <>
            <div className={'music-bar'}>
                <div className={'music-bar--left-controls-container'}>
                    <img alt={'skip-previous'} src={'./src/assets/music-bar/skip_previous.png'}/>
                    <img alt={'play_arrow'} src={'./src/assets/music-bar/play_arrow.png'}/>
                    <img alt={'skip-next'} src={'./src/assets/music-bar/skip_next.png'}/>
                    <p>0:10 / 0:41</p>
                </div>
                <div className={'music-bar--track-info-container'}>
                    <img className={'music-image'} alt={'music-image'} src={'./src/assets/recommendation-card/Songs2/img16.png'}/>
                    <div className={'music-bar--track-info'}>
                        <h2>Listen Again</h2>
                        <h3>Mufambi - The African Traveller•37K views•603 likes</h3>
                    </div>
                    <div className={'music-bar--like-options'}>
                        <img alt={'thumb_down'} src={'./src/assets/music-bar/thumb_down.png'}/>
                        <img alt={'thumb_up'} src={'./src/assets/music-bar/thumb_up.png'}/>
                        <img alt={'more_vert'} src={'./src/assets/music-bar/more_vert.png'}/>
                    </div>
                </div>
                <div className={'music-bar--right-options-container'}>
                    <img alt={'repeat'} src={'./src/assets/music-bar/repeat.png'}/>
                    <img alt={'volume-up'} src={'./src/assets/music-bar/volume_up.png'}/>
                    <img alt={'arrow-drop-down'} src={'./src/assets/music-bar/arrow_drop_down.png'}/>
                </div>
            </div>
        </>
    )
}