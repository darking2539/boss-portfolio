import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GalleryContainer, Thumbnails, Slides, ImageBox, Image, CarouselButtons, CarouselButton, CarouselButtonDot } from './CertificateStyles';
import { CertificatesData } from '../../constants/constants';

function Certificate() {

  const [activeItem, setActiveItem] = useState(0);
  const themesSelector = useSelector(state => state.themesReducer);
  const [darkTrue, setDarkTrue] = useState(true)
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 1 * (i / CertificatesData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 1)) * CertificatesData.length);
      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (themesSelector.storeThemesDetail == "dark") {
      setDarkTrue(true);
    } else {
      setDarkTrue(false);
    }
  }, [themesSelector])

  return (
    <Section id="certificates">
      <SectionDivider divider />
      <SectionTitle dark={darkTrue}>Certificates</SectionTitle>
      <GalleryContainer>
        <Slides ref={carouselRef} onScroll={handleScroll}>
          {CertificatesData.map((item, index) => {
            return (
              <ImageBox id={`carousel__item-${index}`} >
                <Image src={item.link} />
              </ImageBox>
            );
          })}

        </Slides>
      </GalleryContainer>
      <CarouselButtons>
        {CertificatesData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot dark={darkTrue} active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Certificate;
