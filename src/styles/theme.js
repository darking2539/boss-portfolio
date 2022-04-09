import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "../themes/default";
import DarkStyles from './DarkTheme';
import LightStyles from './LightTheme';
import { useSelector } from 'react-redux'

const Theme = ({ children }) => {

  const themesSelector = useSelector(state => state.themesReducer)

  const ChangeThemes = () => {
    if(themesSelector.storeThemesDetail == 'dark'){
      return <DarkStyles/>
    }else{
      return <LightStyles/>
    }
  }
  
  return (
    <ThemeProvider theme={theme}>
      <ChangeThemes />
      {children}
    </ThemeProvider>
  )
}

export default Theme;