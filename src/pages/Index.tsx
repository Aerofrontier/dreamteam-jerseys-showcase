
import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Star, 
  Heart, 
  Eye, 
  ChevronDown, 
  MessageCircle,
  Search,
  Filter,
  Grid,
  List,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SportsSelector from '@/components/SportsSelector';
import BestSellers from '@/components/BestSellers';
import ProductGallery from '@/components/ProductGallery';
import PricingTable from '@/components/PricingTable';
import SizeGuide from '@/components/SizeGuide';
import FAQ from '@/components/FAQ';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedSport, setSelectedSport] = useState('todos');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SportsSelector selectedSport={selectedSport} onSportChange={setSelectedSport} />
      <BestSellers />
      <ProductGallery 
        selectedSport={selectedSport} 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <PricingTable />
      <SizeGuide />
      <FAQ />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
