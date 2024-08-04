import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {font} from '@/styles/common';

export const Photo = styled.img`
  width: 400px;
  object-fit: cover;
  border-radius: 230px;
  margin-right: 15px;
  @media ${theme.media.mobile} {
    width: 310px;
`

export const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`
export const StyleH1 = styled.h1`
  ${font({Fmax:36, Fmin:20, weight:700})}
  background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  p{
    display: none;
  }
`
export const Name = styled.h2`
  ${font({Fmax:50, Fmin:36, weight:700})}
  letter-spacing: 0.05em;
  margin: 10px 0;
  z-index: 555555;

  span{
    white-space: nowrap;
  }
  
  @media ${theme.media.mobile}{
    margin: 15px 0;
  }
`
export const SmallText = styled.h2`
  color: ${theme.colors.primaryText};
  font-weight: 500;
  font-size: 16px;
`
export const TextBlock = styled.div`
  text-align: left;
`
export const PhotoWrapper = styled.div`
  position: relative;
  @media ${theme.media.mobile}{
    margin-top: 35px;
  }
`