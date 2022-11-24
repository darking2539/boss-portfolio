import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GalleryContainer, Thumbnails, Slides, ImageBox, Image } from './CertificateStyles';

function Certificate() {
  
  const themesSelector = useSelector(state => state.themesReducer);
  const [darkTrue, setDarkTrue] = useState(true)

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
            <Thumbnails></Thumbnails>
            <Slides>
                <ImageBox><Image src="https://raw.githubusercontent.com/darking2539/boss-cv/main/public/images_pdf/k8s%20mastery.png"/></ImageBox>
                <ImageBox><Image src="https://raw.githubusercontent.com/darking2539/boss-cv/main/public/images_pdf/DAB.jpg"/></ImageBox>
                <ImageBox><Image src="https://raw.githubusercontent.com/darking2539/boss-cv/main/public/images_pdf/introdocker.png"/></ImageBox>
                <ImageBox><Image src="https://raw.githubusercontent.com/darking2539/boss-cv/main/public/images_pdf/devsecops.png"/></ImageBox>
                <ImageBox><Image src="https://raw.githubusercontent.com/darking2539/boss-cv/main/public/images_pdf/Reactjs.jpg"/></ImageBox>
            </Slides>
        </GalleryContainer>
    </Section>
  );
};

export default Certificate;
