import './RecommendationTitle.css'

function RecommendationTitle({profileImage, subtitle, title}) {
    return(
        <>
            <div className={'recommendation-title-container'}>
                <img src={profileImage} alt={'profile-image'}/>
                <div className={'recommendation-title__text-container'}>
                    <h3>{subtitle}</h3>
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    );
}

export default RecommendationTitle;