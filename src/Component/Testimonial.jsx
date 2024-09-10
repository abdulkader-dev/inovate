import React from 'react';
import TestimonialImg from '../assets/Testimonial.png'; // Renamed the import to avoid name conflict

const Testimonial = () => {
  return (
    <div>
      <img src={TestimonialImg} alt="Testimonial" className="max-w-container mx-auto" />
    </div>
  );
};

export default Testimonial;
