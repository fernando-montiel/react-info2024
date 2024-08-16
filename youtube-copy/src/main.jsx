import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
      recommendations,
      recommendations1,
      recommendationTitleAndSubtitleObject,
      recommendationSubtitleObject,
      recommendationsAlbums,
      recommendationTitleAndSubtitleObjectType2, similarTo
} from "./lists.js";
import { TopNavbar } from './components/top-navbar/TopNavbar.jsx'
import { LeftNavbar } from './components/left-navbar/LeftNavbar.jsx'
import { ButtonCategoryContainer } from './components/button-category-container/ButtonCategoryContainer.jsx'
import './reset.css';
import {RecommendationContainer} from "./components/recommendation-container/RecommendationContainer.jsx";
import firstStyleType from './css/RecommendationFirstTypeContainer.module.css';
import secondStyleType from './css/RecommendationSecondTypeContainer.module.css';
import thirdStyleType from './css/RecommendationThirdTypeContainer.module.css';
import fourthStyleType from './css/RecommendationFourthTypeContainer.module.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TopNavbar profileImage={"./src/assets/top-navbar/Avatar.png"} />
      <LeftNavbar />
      <ButtonCategoryContainer/>
      <RecommendationContainer recommendationTitleObject={recommendationTitleAndSubtitleObject} recommendations={recommendations} styleType={firstStyleType}></RecommendationContainer>
      <RecommendationContainer recommendationTitleObject={recommendationTitleAndSubtitleObject} recommendations={recommendations1} styleType={secondStyleType}></RecommendationContainer>
      <RecommendationContainer recommendationTitleObject={recommendationSubtitleObject} recommendations={recommendationsAlbums} styleType={thirdStyleType}></RecommendationContainer>
      <RecommendationContainer recommendationTitleObject={recommendationTitleAndSubtitleObjectType2} recommendations={similarTo} styleType={fourthStyleType}></RecommendationContainer>
  </StrictMode>,
)



