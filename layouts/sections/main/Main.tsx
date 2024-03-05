import React from 'react';
import img from '../../../assets/image/photo.webp'
import styled from 'styled-components';
import {FlexWrapper} from '@/components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
           <FlexWrapper align={'center'} justify={'space-around'}>
               <div>
                   <span>Hi there</span>
                   <span>I am Polshin Mikhail</span>
                   <h1>A Web Developer</h1>
               </div>
               {/*<Photo src={img.src} alt=""/>*/}
           </FlexWrapper>
        </StyledMain>
    );
};
const Photo = styled.img `
  width: 400px;
  object-fit: cover;
`

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: rgba(229, 167, 42, 0.7);
`
