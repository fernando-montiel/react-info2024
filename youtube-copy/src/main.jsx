import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { allList } from "./lists.js";
import { Layout } from './components/layout/Layout.jsx'
import { ButtonCategoryContainer } from './components/button-category-container/ButtonCategoryContainer.jsx'
import './reset.css';
import { RecommendationContainer } from "./components/recommendation-container/RecommendationContainer.jsx";
import firstStyleType from './css/RecommendationFirstTypeContainer.module.css';
import secondStyleType from './css/RecommendationSecondTypeContainer.module.css';
import thirdStyleType from './css/RecommendationThirdTypeContainer.module.css';
import fourthStyleType from './css/RecommendationFourthTypeContainer.module.css';
import {NewPlaylistForm} from "./components/NEXT-STEPS/NewPlaylistForm.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Layout>
            <ButtonCategoryContainer/>
            {/*<NewPlaylistForm></NewPlaylistForm>*/}
            <RecommendationContainer recommendationTitleObject={allList.recommendationTitleAndSubtitleObject} recommendations={allList.recommendations} styleType={firstStyleType} buttonText={'More'}></RecommendationContainer>
            <RecommendationContainer recommendationTitleObject={allList.recommendationTitleAndSubtitleObject} recommendations={allList.recommendations1} styleType={secondStyleType} buttonText={'Play All'}></RecommendationContainer>
            <RecommendationContainer recommendationTitleObject={allList.recommendationSubtitleObject} recommendations={allList.recommendationsAlbums} styleType={thirdStyleType}></RecommendationContainer>
            <RecommendationContainer recommendationTitleObject={allList.recommendationTitleAndSubtitleObjectType2} recommendations={allList.similarTo} styleType={fourthStyleType}></RecommendationContainer>
            <RecommendationContainer recommendationTitleObject={allList.recommendationTitleAndSubtitleObject} recommendations={allList.recommendations} styleType={firstStyleType} buttonText={'More'}></RecommendationContainer>
            <RecommendationContainer recommendationTitleObject={allList.recommendationTitleAndSubtitleObject} recommendations={allList.recommendations1} styleType={secondStyleType} buttonText={'Play All'}></RecommendationContainer>
            <RecommendationContainer recommendationTitleObject={allList.recommendationSubtitleObject} recommendations={allList.recommendationsAlbums} styleType={thirdStyleType}></RecommendationContainer>
            <RecommendationContainer recommendationTitleObject={allList.recommendationTitleAndSubtitleObjectType2} recommendations={allList.similarTo} styleType={fourthStyleType}></RecommendationContainer>
        </Layout>
  </StrictMode>,
)



