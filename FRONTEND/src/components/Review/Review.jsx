import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './review.css';
import { EffectCoverflow } from 'swiper/modules';
import quote from '../../assets/quote.png';
import rev1 from '../../assets/person.jpg';


const testimonials = [
  {
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, asperiores eaque deserunt officiis sequi ipsa facere at. Sint, distinctio.',
    name: 'Adolf Hitler',
    title: 'Revolutionary Figure',
    image: rev1,
  },
  {
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, asperiores eaque deserunt officiis sequi ipsa facere at. Sint, distinctio.',
    name: 'James Gunn',
    title: 'Revolutionary Figure',
    image: rev1,
  },
  {
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, asperiores eaque deserunt officiis sequi ipsa facere at. Sint, distinctio.',
    name: 'Mandy Rose',
    title: 'Revolutionary Figure',
    image: rev1,
  },
  {
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, asperiores eaque deserunt officiis sequi ipsa facere at. Sint, distinctio.',
    name: 'Ryan Jackson',
    title: 'Revolutionary Figure',
    image: rev1,
  },
  {
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, asperiores eaque deserunt officiis sequi ipsa facere at. Sint, distinctio.',
    name: 'Yasmine Kessler',
    title: 'Revolutionary Figure',
    image: rev1,
  },
  {
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, asperiores eaque deserunt officiis sequi ipsa facere at. Sint, distinctio.',
    name: 'Aaron Valentine',
    title: 'Revolutionary Figure',
    image: rev1,
  },
  {
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, asperiores eaque deserunt officiis sequi ipsa facere at. Sint, distinctio.',
    name: 'Thomas Shelby',
    title: 'Revolutionary Figure',
    image: rev1,
  },
];

export default function Review() {
  return (
    <section id="review">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonialBox">
              <img src={quote} alt="quote" className="quote" />
              <div className="content">
                <p>{testimonial.quote}</p>
                <div className="details">
                  <div className="imgBx">
                    <img src={testimonial.image} alt="user" />
                  </div>
                  <h3>
                    {testimonial.name}
                    <br />
                    <span>{testimonial.title}</span>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
