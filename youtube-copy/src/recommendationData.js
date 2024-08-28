import {allList} from "./lists.js";
import firstStyleType from './css/RecommendationFirstTypeContainer.module.css';
import secondStyleType from './css/RecommendationSecondTypeContainer.module.css';
import thirdStyleType from './css/RecommendationThirdTypeContainer.module.css';
import fourthStyleType from './css/RecommendationFourthTypeContainer.module.css';

export const recommendationsData = [
    {
        id: 1,
        recommendationTitleObject: allList.recommendationTitleAndSubtitleObject,
        recommendations: allList.recommendations,
        styleType: firstStyleType,
        buttonText: 'More'
    },
    {
        id: 2,
        recommendationTitleObject: allList.recommendationTitleAndSubtitleObject,
        recommendations: allList.recommendations1,
        styleType: secondStyleType,
        buttonText: 'Play All'
    },
    {
        id: 3,
        recommendationTitleObject: allList.recommendationSubtitleObject,
        recommendations: allList.recommendationsAlbums,
        styleType: thirdStyleType
    },
    {
        id: 4,
        recommendationTitleObject: allList.recommendationTitleAndSubtitleObjectType2,
        recommendations: allList.similarTo,
        styleType: fourthStyleType
    },
    {
        id: 5,
        recommendationTitleObject: allList.recommendationTitleAndSubtitleObject,
        recommendations: allList.recommendations,
        styleType: firstStyleType,
        buttonText: 'More'
    },
    {
        id: 6,
        recommendationTitleObject: allList.recommendationTitleAndSubtitleObject,
        recommendations: allList.recommendations1,
        styleType: secondStyleType,
        buttonText: 'Play All'
    },
    {
        id: 7,
        recommendationTitleObject: allList.recommendationSubtitleObject,
        recommendations: allList.recommendationsAlbums,
        styleType: thirdStyleType
    },
    {
        id: 8,
        recommendationTitleObject: allList.recommendationTitleAndSubtitleObjectType2,
        recommendations: allList.similarTo,
        styleType: fourthStyleType
    }
];