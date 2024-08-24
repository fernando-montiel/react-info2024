import './NewPlaylistForm.css';
import { useState } from 'react';

export function NewPlaylistForm({setIsComplexState, setPlaylist}) {

    const [newPlaylist, setNewPlaylist] = useState({id: 0, image: '', title: '', description: ''});
    const [nextId, setNextId] = useState(1);
    const [validate, setValidate] = useState('');

    const handleClickOutside = (event) => {
        if (event.target.className.includes('new-playlist__container') && !event.target.closest('.modal-content')) {
            setIsComplexState(false);
        }
    }

    function handlePlaylist(attr, event) {
        event.preventDefault();
        setNewPlaylist( prevNewPlaylist => ({
            ...prevNewPlaylist, [attr]: `${event.target.value}`
        }));
    }

    function handleFormSubmit(event){
        event.preventDefault();
        if (newPlaylist.title.length <= 6) {
            setValidate('The title must be at least 6 digits.');
            return;
        } else {
            setValidate('');
        }
        setNewPlaylist(
             {id: nextId, image: event.target.image.value, title: event.target.title.value, description: event.target.description.value}
        );
        setPlaylist(prevItems => [...prevItems, newPlaylist]);
        setNextId(prevId => prevId + 1);
        setIsComplexState(false)
    }

    return(

        <div className={'new-playlist__container'} onClick={handleClickOutside}>
            <div className={'modal-content'}>
                <form onSubmit={handleFormSubmit}>
                    <h1>New playlist</h1>
                    {/*<label htmlFor={'title'}>Image</label>*/}
                    <input id={'title'} name={'title'} value={newPlaylist.title} placeholder={'Title'}
                           onChange={(event) => handlePlaylist('title', event)}></input>
                    {/*<label htmlFor={'description'}>Title</label>*/}
                    <input id={'description'} name={'description'} value={newPlaylist.description} placeholder={'Description'}
                           onChange={(event) => handlePlaylist('description', event)}></input>
                    {/*<label htmlFor={'image'}>Price</label>*/}
                    <input id={'image'} name={'image'} value={newPlaylist.image} placeholder={'Image URL'}
                           onChange={(event) => handlePlaylist('image', event)}></input>
                    <div className={'button-container'}>
                        <button type="submit" onClick={() => {setIsComplexState(false)}}>Cancel</button>
                        <button type="submit" disabled={newPlaylist.title.length <= 6}>Create</button>
                    </div>
                    {validate && <p className={'validate'}>{validate}</p>}
                </form>
                <div className={'info-review'}>
                    <img src={newPlaylist.image || 'https://th.bing.com/th/id/R.6f442ee6df5cf3ccf2a1eee96064f987?rik=Pas5705URUKaAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f6%2f6%2f1199690-4k-ultra-hd-nature-wallpaper-3840x2160-for-android-50.jpg&ehk=XnBoqrBdnfvdRVc5VoOt0tZzzhiXJ%2f9hxZq%2bZpBmq0o%3d&risl=&pid=ImgRaw&r=0'} alt="preview-img"/>
                    <h2>{newPlaylist.title || 'Playlist Name'}</h2>
                    <p>{newPlaylist.description || 'Description'}</p>
                </div>
            </div>
        </div>
    );
}