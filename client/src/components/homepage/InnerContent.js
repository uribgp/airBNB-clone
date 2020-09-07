import React from 'react';
import Banner from './Banner';
import './homepage.css';
import SpecialsCard from './SpecialsCard';
import cardSeeds from './cardSeeds';

function InnerContent() {
  return (
    <div className="inner_content">
      <Banner />
      <div className="specials_container">
      {cardSeeds.map((seed) => <SpecialsCard info={seed} key={seed.id} />)}
      </div>
    </div>
  )
}

export default InnerContent
