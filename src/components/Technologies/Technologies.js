import React, { useState, useEffect } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { useSelector } from 'react-redux';

function Technologies() {
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
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle main dark={darkTrue}>Technologies</SectionTitle>
    <SectionText main dark={darkTrue}>
      I've worked with a Information technologies in the web development
      with full loop development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle main dark={darkTrue}>Front-End</ListTitle>
          <ListParagraph main dark={darkTrue}>
            React.js <br />
            HTML5 CSS <br />
            TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle main dark={darkTrue}>Back-End</ListTitle>
          <ListParagraph main dark={darkTrue}>
            Node.js <br />
            Golang <br />
            SQL & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle main dark={darkTrue}>Infrastructure</ListTitle>
          <ListParagraph main dark={darkTrue}>
            Docker Container <br />
            K8S <br />
            AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);
}

export default Technologies;
