import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons, SocialIconsDark } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

function Footer() {
  
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
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle dark={darkTrue}>Call</LinkTitle>
          <LinkItem dark={darkTrue} href="tel:0972246931">+66972246931</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle dark={darkTrue}>Email</LinkTitle>
          <LinkItem dark={darkTrue} href="mailto:suphadet.b@gmail.com">
            suphadet.b@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan dark={darkTrue}>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>  
            <SocialIcons dark={darkTrue} href="https://github.com/darking2539" style={{color: `${darkTrue ? "white": "black"}`}} >
              <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons dark={darkTrue} href="https://www.linkedin.com/in/suphadet/" style={{color: `${darkTrue ? "white": "black"}`}}>
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons dark={darkTrue} href="https://www.instagram.com/abosszz/" style={{color: `${darkTrue ? "white": "black"}`}}>
              <AiFillInstagram size="3rem" />
            </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
