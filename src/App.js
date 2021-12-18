import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} exact />
          <Route path="*" element={<ErrorPage />} exact/>
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}