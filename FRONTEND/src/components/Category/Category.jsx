import React, { useState, useEffect } from 'react';
import './category.css';
import bgimage1 from '../../assets/product_images/bgimage1.png';
import bgimage2 from '../../assets/product_images/bgimage2.jpg';
import bgimage3 from '../../assets/product_images/bgimage3.png';
import bgimage4 from '../../assets/product_images/bgimage4.png';
import bgimage5 from '../../assets/product_images/bgimage5.jpg';
import thumb1 from '../../assets/product_images/thumb1.jpg';
import thumb2 from '../../assets/product_images/thumb2.jpg';
import thumb3 from '../../assets/product_images/thumb3.png';
import thumb4 from '../../assets/product_images/thumb4.jpg';
import thumb5 from '../../assets/product_images/thumb5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

function Category() {
  const items = [
    { bgImage: bgimage1, thumb: thumb1, title: 'Rings' },
    { bgImage: bgimage2, thumb: thumb2, title: 'Necklaces' },
    { bgImage: bgimage3, thumb: thumb3, title: 'Earrings' },
    { bgImage: bgimage4, thumb: thumb4, title: 'Bracelets' },
    { bgImage: bgimage5, thumb: thumb5, title: 'Pendants' },
  ];

  const [itemActive, setItemActive] = useState(0);
  const countItem = items.length;

  const showSlider = (index) => {
    setItemActive(index);
  };

  const handleNext = () => {
    const newIndex = (itemActive + 1) % countItem;
    showSlider(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (itemActive - 1 + countItem) % countItem;
    showSlider(newIndex);
  };

  useEffect(() => {
    const handleThumbnailClick = (index) => {
      showSlider(index);
    };

    const thumbnails = document.querySelectorAll('.thumbnail .item');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => handleThumbnailClick(index));
    });

    return () => {
      thumbnails.forEach((thumbnail) => {
        thumbnail.removeEventListener('click', handleThumbnailClick);
      });
    };
  }, []);

  return (
    <section id="category">
      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? 'active' : ''}`}
            >
              <img src={item.bgImage} alt={item.title} />
              <div className="content">
                <h2>{item.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
                <button className="button-74" role="button">
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows-c">
          <button id="prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? 'active' : ''}`}
            >
              <img src={item.thumb} alt={item.title} />
              <div className="content">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;