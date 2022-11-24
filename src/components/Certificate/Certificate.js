import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { } from './CertificateStyles';

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
    </Section>
  );
};

export default Certificate;
