import React, { useState, useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useSelector } from 'react-redux';

const Hero = (props) => {

  const themesSelector = useSelector(state => state.themesReducer);
  const [darkTrue, setDarkTrue] = useState(true)

  useEffect(() => {
    if (themesSelector.storeThemesDetail == "dark"){
      setDarkTrue(true);
    }else{
      setDarkTrue(false);
    }
  }, [themesSelector])
 
  return(
  <div style={{marginTop: "10%"}} >
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center dark={darkTrue}>
          Welcome To <br />
          Suphadet Portfolio
        </SectionTitle>
        <SectionText dark={darkTrue}>
          The purpose of this website is practice front-end development skills using CSS-Style and NEXT.JS framework and show my portfolio.
        </SectionText>
        <Button onClick={props.handleClick} > <FileDownloadIcon sx={{ fontSize: 20 }} style={{marginRight: 5}}/> My Resume </Button>
      </LeftSection>
    </Section>
  </div>
  )
};

export default Hero;