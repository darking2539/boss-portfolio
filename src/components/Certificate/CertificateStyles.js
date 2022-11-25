import styled from 'styled-components';

export const GalleryContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Thumbnails = styled.div`
  position: absolute;
  bottom: 8px;
  display: flex;
  flex-direction: row;
  gap: 6px;
`
export const Slides = styled.div`
  margin: 0 16px;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  width: 800px;
  padding: 0 0.25rem;
  height: 620px;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  
  //remove scrollbar
  scrollbar-width: none;  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: 650px;
    height: 550px;
	}

  @media ${props => props.theme.breakpoints.md}{
    width: 580px;
    height: 460px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    width: 320px;
    height: 250px;
  }
`
export const ImageBox = styled.div`
  scroll-snap-align: start;
`

export const Image = styled.img`
  width: 800px;
  object-fit: cover;

  @media ${props => props.theme.breakpoints.lg} {
    width: 650px;
	}

  @media ${props => props.theme.breakpoints.md}{
    width: 580px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    width: 320px;
  }
`

export const CarouselButtons = styled.div`
  display: none;
  justify-content: center;
  display: flex;
  visibility: visible;
  margin-top: 5px;
`

export const CarouselButton = styled.button`
  color: red;
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: ${(props) => props.dark ? 'white' : 'black'};
  border-radius: 10px;
  margin: auto;
  width: 7px;
  height: 7px;

  @media ${props => props.theme.breakpoints.lg} {
    width: 7px;
    height: 7px;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 5px;
    height: 5px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 3px;
    height: 3px;
  }
`