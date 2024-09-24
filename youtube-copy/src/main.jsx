import React, {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/layout/Layout.jsx'
import { ButtonCategoryContainer } from './components/button-category-container/ButtonCategoryContainer.jsx'
import './reset.css';
import { Video } from "./components/NEXT-STEPS/Video.jsx";
import {UseEffect} from "./components/NEXT-STEPS/UseEffect.jsx";
import {Fetch} from "./components/NEXT-STEPS/Fetch.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Layout>
          <ButtonCategoryContainer/>
          {/*<Video></Video>*/}
          {/*<UseEffect></UseEffect>*/}
          {/*<Fetch></Fetch>*/}
      </Layout>
  </StrictMode>
)



