export function RecommendationCard({image ,title, subtitle, containerStyle, textStyle}){
    return(
        <>
            <div className={containerStyle}>
                <img src={image} alt={'image'}/>
                <div className={textStyle}>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
        </>
    )
}