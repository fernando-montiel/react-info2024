import React, {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/layout/Layout.jsx'
import { ButtonCategoryContainer } from './components/button-category-container/ButtonCategoryContainer.jsx'
import './reset.css';
import { RecommendationContainer } from "./components/recommendation-container/RecommendationContainer.jsx";
import {recommendationsData} from "./recommendationData.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Layout>
          <ButtonCategoryContainer/>
          {recommendationsData.map((data) => (
              <RecommendationContainer
                  key={data.id}
                  recommendationTitleObject={data.recommendationTitleObject}
                  recommendations={data.recommendations}
                  styleType={data.styleType}
                  buttonText={data.buttonText}
              />
          ))}
      </Layout>
  </StrictMode>
)



