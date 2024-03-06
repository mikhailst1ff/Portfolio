import React from 'react';
import styled from 'styled-components';


type WorkPropsType = {
    title:string
    description:string
    src:string
}
export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.description}</Text>
            <Link href="">demo</Link>
            <Link href="">code</Link>
        </StyledWork>
    );
};
const StyledWork = styled.div`
  background-color: yellow;
  max-width: 540px;
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Link = styled.a`

`
const Text = styled.p`

`
const Title = styled.h3`

`
