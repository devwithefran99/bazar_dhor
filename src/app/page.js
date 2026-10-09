import AllProducts from '@/components/Homepage/AllProducts';
import HeroBanner from '@/components/Homepage/HeroBanner';
import PriceDown from '@/components/Homepage/PriceDown';
import PriceUp from '@/components/Homepage/PriceUp';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroBanner />

      <PriceUp />
      <PriceDown />

      <AllProducts />
    </div>
  );
};

export default page;