import './NewCompletePlaylistForm.css';
import { handleList } from '../../../../../functions.js';
import { useState } from 'react';

export function NewCompletePlaylistForm({setIsComplexState, setPlaylist}) {

    const [newPlaylist, setNewPlaylist] = useState({id: 0, image: '', title: '', description: ''});
    const [nextId, setNextId] = useState(1);
    const [validate, setValidate] = useState('');

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

        <div className={'new-complete-playlist__container'}>
            <div className={'complete-modal-content'}>
                <form onSubmit={handleFormSubmit}>
                    <h1>New playlist</h1>
                    {/*<label htmlFor={'title'}>Title</label>*/}
                    <input id={'title'} name={'title'} value={newPlaylist.title} placeholder={'Title'}
                           onChange={(event) => handleList('title', event, setNewPlaylist)}></input>
                    {/*<label htmlFor={'description'}>Description</label>*/}
                    <input id={'description'} name={'description'} value={newPlaylist.description}
                           placeholder={'Description'}
                           onChange={(event) => handleList('description', event, setNewPlaylist)}></input>
                    {/*<label htmlFor={'image'}>Image</label>*/}
                    <input id={'image'} name={'image'} value={newPlaylist.image} placeholder={'Image URL'}
                           onChange={(event) => handleList('image', event, setNewPlaylist)}></input>
                    {/*<label htmlFor={'privacy'}>Privacy</label>*/}
                    <select id="privacy" name="privacy">
                        <option value="public" selected>Public</option>
                        <option value="unlisted">Unlisted</option>
                        <option value="private ">Private</option>
                    </select>

                    <div className={'button-container'}>
                        <button type="submit" onClick={() => {
                            setIsComplexState(false)
                        }}>Cancel
                        </button>
                        <button type="submit" disabled={newPlaylist.title.length <= 6}>Create</button>
                    </div>
                    {validate && <p className={'validate'}>{validate}</p>}
                </form>
                <div className={'info-complete-review'}>
                    <img
                        src={newPlaylist.image || 'https://th.bing.com/th/id/R.6f442ee6df5cf3ccf2a1eee96064f987?rik=Pas5705URUKaAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f6%2f6%2f1199690-4k-ultra-hd-nature-wallpaper-3840x2160-for-android-50.jpg&ehk=XnBoqrBdnfvdRVc5VoOt0tZzzhiXJ%2f9hxZq%2bZpBmq0o%3d&risl=&pid=ImgRaw&r=0'} alt="preview-img"/>
                    <h2>{newPlaylist.title || 'Playlist Name'}</h2>
                    <p>{newPlaylist.description || 'Description'}</p>
                </div>
            </div>
        </div>
    );
}