import React from 'react'
import Slider from 'react-slick'
import Head from 'next/head'

import testimonials from '../../../config/testimonials'

const Testimonials = () => [
  <Head key="head">
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </Head>,
  <Slider key="slider" autoplay autoplaySpeed={10000}>
    {
      testimonials.map(testimonial => (
        <div className="p-4" key={testimonial.quote}>
          <blockquote>
            { testimonial.quote }
            <cite className="block text-right">
              &#8213; { testimonial.contact }, { testimonial.company }
            </cite>
          </blockquote>
        </div>
      ))
    }
  </Slider>,
]

export default Testimonials
