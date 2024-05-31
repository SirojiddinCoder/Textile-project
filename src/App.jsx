import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './Components/Navbar/navbar';
import About from './pages/about';
import Collection from './pages/collection';
import Contact from './pages/contact';
import AboutCard from './Components/AboutCard/AboutCard';
import QishKollleksiya from './Components/QishKolleksiya/QishKollleksiya';
import KuzKolleksiya from './Components/KuzKolleksiya/KuzKolleksiya';
import Yangiliklar from './Components/News/Yangiliklar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <AboutCard images1={true} /> 
      <QishKollleksiya />
      <AboutCard /> 
      <KuzKolleksiya />
      <AboutCard images3={true} /> 
      <KuzKolleksiya Yoz={true} />
      <Yangiliklar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bizhaqimizda" element={<About />} />
        <Route path="/toplamlar" element={<Collection />} />
        <Route path="/boglanish" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
     
    </div>
  );
}

export default App;
