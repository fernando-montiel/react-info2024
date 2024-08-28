import React, {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/layout/Layout.jsx'
import { ButtonCategoryContainer } from './components/button-category-container/ButtonCategoryContainer.jsx'
import './reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Layout>
          <ButtonCategoryContainer/>
      </Layout>
  </StrictMode>
)



