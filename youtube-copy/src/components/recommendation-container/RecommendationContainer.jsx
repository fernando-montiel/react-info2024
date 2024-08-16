import RecommendationTitle from "../recommendation-title/RecommendationTitle.jsx";
import {RecommendationCard} from "../recommendation-card/RecommendationCard.jsx";

export function RecommendationContainer({recommendationTitleObject, recommendations, styleType}) {
    return(
        <>
            <div className={styleType.recommendation_container}>
                <div>
                    <RecommendationTitle profileImage={"./src/assets/top-navbar/Avatar.png"} subtitle={recommendationTitleObject.subtitle} title={recommendationTitleObject.title}/>
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


