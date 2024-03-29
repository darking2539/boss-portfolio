import React, { useState, useEffect } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { useSelector } from 'react-redux';

const Projects = () => {
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
    <Section id="projects">
      <SectionDivider divider />
      <SectionTitle dark={darkTrue}>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i} dark={darkTrue}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title dark={darkTrue}>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info" dark={darkTrue}>{p.description}</CardInfo>
              <div>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag dark={darkTrue} key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>Source</ExternalLinks>
                <ExternalLinks href={p.source}>Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
}

export default Projects;