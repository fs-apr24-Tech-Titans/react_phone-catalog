import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { CartPage } from './components/Cart/CartPage';
import { ProductPage } from './components/ProductPage/ProductPage';
import { AppProvider } from './context/AppContext';

export const Root = () => (
   <AppProvider>
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
         <Route path="cartPage" element={<CartPage />} />
          <Route path=":category/:itemId" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </React.StrictMode>
      </Router>
      </AppProvider>
);
