import {FlexWrapper} from '@/components/FlexWrapper';
import React, {useContext} from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {Context} from '@/context/Context';
import {Icon} from '@/components/icon/icon';
import {Container} from '@/components/Container';
import {SectionSubTitle} from '@/components/SectionSubTitle';
import {theme} from '@/styles/theme';

export const Skills = () => {
    const skills = useContext(Context);

    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionSubTitle>Technologies I’ve been working with recently</SectionSubTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} gap={'20px'}>
                    {skills.map(el=><SkillWrapper key={el.title}><Icon icon={el.icon} color={el.color} size={'100px'} /><StyledTitle>{el.title}</StyledTitle></SkillWrapper>)}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
  min-height: 100vh;
`
const SkillWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  &:hover{
    transform: scale(1.05);
  }
`
const StyledTitle = styled.h3`
  padding-top: 20px;
  color: ${theme.colors.primaryText};
`

