import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FlashSalesSection from './components/FlashSalesSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import BestSelling from './components/BestSelling';
import ExploreProducts from './components/ExploreProducts';
import NewArrivals from './components/NewArrivals';
import Services from './components/Services';
import Footer from './components/Footer';
import FavoriteProducts from './components/FavoriteProducts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Topbar />
              <Navbar />
              <HeroSection />
              <FlashSalesSection />
              <CategoriesSection />
              <BestSelling />
              <ExploreProducts />
              <NewArrivals />
              <Services />
              <Footer />
            </>
          } />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/favorite" element={<FavoriteProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
