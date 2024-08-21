import RecommendationTitle from "../recommendation-title/RecommendationTitle.jsx";
import {RecommendationCard} from "../recommendation-card/RecommendationCard.jsx";
import './RecommendationContainer.css';

export function RecommendationContainer({recommendationTitleObject, recommendations, styleType, buttonText}) {

    return(
        <>
            <div className={styleType.recommendation_container}>
                <div className={'recommendation-container__header'}>
                    <RecommendationTitle profileImage={"./src/assets/top-navbar/Avatar.png"} subtitle={recommendationTitleObject.subtitle} title={recommendationTitleObject.title}/>
                    <div className={'recommendation-container__header--right-content'}>
                        {buttonText && (
                            <button className={'recommendation-container__header--button'}>{buttonText}</button>
                        )}
                        <img alt={'expand-circle-left'}
                             src={'./src/assets/recommendation-container/expand_circle_left.png'}/>
                        <img alt={'filled-circle-right'} src={'./src/assets/recommendation-container/Filled_circle_right.png'}/>
                    </div>
                </div>
                <div className={styleType.recommendation_container__body}>
                    {recommendations.map((recommendation) => (
                        <RecommendationCard
                            key={recommendation.id}
                            image={recommendation.image}
                            title={recommendation.title}
                            subtitle={recommendation.subtitle}
                            containerStyle={styleType.recommendation_card_container_style}
                            textStyle={styleType.recommendation_card_text_style}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


