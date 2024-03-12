import React from 'react';
import img from '../../../assets/image/photo.png'
import styled from 'styled-components';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Container} from '@/components/Container';
import {theme} from '@/styles/theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <TextBlock>
                        <SmallText>Hi there</SmallText>
                        <Name>I am Polshin Mikhail</Name>
                        <StyleH1>A Web Developer</StyleH1>
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={img.src} alt=""/>
                        <SQRwrapper>
                            <SQR $deg="105"></SQR>
                            <SQR $deg="120"></SQR>
                            <SQR $deg="135"></SQR>
                            <SQR $deg="150"></SQR>
                            <SQR $deg="165"></SQR>
                        </SQRwrapper>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const Photo = styled.img`

  width: 400px;
  object-fit: cover;
  border-radius: 230px;
  @media ${theme.media.mobile}{
    display: none ;
`

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`
const StyleH1 = styled.h1`
  background-color: #2AA5A0;
  background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Name = styled.h2`
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;
`
const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`
const TextBlock = styled.div`
  text-align: left;
`
const PhotoWrapper = styled.div`
  position: relative;
  @media ${theme.media.tablet} {
    
  }
`
const SQRwrapper = styled.div`
  
  @media ${theme.media.tablet} {
  display: none;
  }
 
`
const SQR = styled.div<{ $deg?: string; }>`
  position: absolute;
  bottom: 0;
  width: 444px;
  height: 444px;
  border: 1px solid;
  transform: rotate(${props => props.$deg}deg);
  border-image: repeating-linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170)) 1;
  transition: transform 10s ;
  
   //&:hover {
   //  &:{
   //    
   //  }
   //  animation: spin 5s linear 0s infinite;
   //}
   //
   //@keyframes spin {
   //  from {
   //    transform: rotate(0 deg);
   //  }
   //  to {
   //    transform: rotate(360deg);
   //  }
   //}
`