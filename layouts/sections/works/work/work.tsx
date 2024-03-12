import React from 'react';
import styled from 'styled-components';
import {Icon} from '@/components/icon/icon';
import {SiGithub} from 'react-icons/si';
import {FaLink} from 'react-icons/fa6';
import proj from '@/assets/image/project2.png'
import {Button} from '@/components/Button';


type WorkPropsType = {
    title: string
    description: string
    src: string
    stack:string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Button>view</Button>
                <Image src={proj.src} alt="ghb"/>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.description}</Text>
                <Text>{props.stack}</Text>
                <Link href=""> <Icon icon={FaLink} size={'15px'} color={'#000'}></Icon><span>Demo</span></Link>
                <Link href=""> <Icon icon={SiGithub} size={'15px'} color={'#000'}></Icon><span>Code</span></Link>
            </Description>
        </StyledWork>
    );
};

const Link = styled.a`
  position: relative;
  display: inline-block;
  font-weight: 400;
  font-size: 16px;

  span {
    padding-left: 10px;
  }
  &:hover {
    transform: translateY(-1px) scale(1.05);
    &::before{
      height: 1px;
    }
  }
  &::before{
    content: "";
    position: absolute;
    background-color: black;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const StyledWork = styled.div`
  margin: 40px 0;
  max-width: 350px;
  height: 500px;
  width: 100%;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  color: black;
  ${Link} {
    color: black;
    & + ${Link} {
      margin-left: 20px;
    }
  }
`
const ImageWrapper = styled.div`
  position: relative;
  ${Button}{
    opacity: 0;
    position: absolute;
    left: 25%;
    top: 50%;
  }
  &:hover {
    ${Button}{
      opacity: 1;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 20px 20px 0 0;
      background: rgba(0, 0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
  }
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
const Text = styled.p`
  margin: 14px 0 10px;
`
const Title = styled.h3`

`
const Description = styled.div`
  padding: 25px 20px;
`

