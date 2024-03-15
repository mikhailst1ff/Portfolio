import {FlexWrapper} from '@/components/FlexWrapper';
import React, {useContext} from 'react';
import {SectionTitle} from '@/components/SectionTitle';
import {Context} from '@/context/Context';
import {Icon} from '@/components/icon/icon';
import {Container} from '@/components/Container';
import {SectionSubTitle} from '@/components/SectionSubTitle';
import {SkillWrapper, StyledSkills, StyledTitle} from '@/layouts/sections/skils/SkillsStyled';

export const Skills: React.FC = () => {
    const skills = useContext(Context);
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionSubTitle>Technologies I’ve been working with recently</SectionSubTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-around'} gap={'20px'}>
                    {skills.map(el =>
                        <SkillWrapper key={el.title}>
                            <Icon icon={el.icon} color={el.color} size={'100px'}/>
                            <StyledTitle>{el.title}</StyledTitle>
                        </SkillWrapper>
                    )}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
