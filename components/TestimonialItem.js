import React from 'react';

export default function TestimonialItem(props) {
  return (
    <div className='testimonial'>
      <p className='customer-testimonial'>{props.testimonial}</p>
      <p className='customer-name'>{props.clientName}</p>
    </div>
  );
}
