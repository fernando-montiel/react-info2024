import './TopNavbar.css';

export function TopNavbar({profileImage}) {
    return(
        <>
            <div className={'top__navbar'}>
                <div className={'top__navbar--left'}>
                    <img src={'./src/assets/top-navbar/menu.png'} alt={'menu-img'} className={'top__navbar__menu'} />
                    <img src={'./src/assets/top-navbar/on_platform_logo_dark 1.png'} alt={'logo-img'} className={'top__navbar__logo'} />
                    <div className="top__navbar__search-container">
                        <img src={'./src/assets/top-navbar/search-icon.png'} alt={'search-img'} className={'top__navbar__search-icon'} />
                        <input type="text" placeholder="Search songs, albums, artists, podcasts" className={'top__navbar__search-input'}/>
                    </div>
                </div>
                <div className={'top__navbar--right'}>
                    <img src={'./src/assets/top-navbar/cast.png'} alt={'cast-img'} className={'top__navbar__cast-img'}/>
                    <img src={profileImage} alt={'profile-img'} className={'top__navbar__profile-img'} />
                </div>
            </div>
        </>
    );
}
