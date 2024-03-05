import {FlexWrapper} from '@/components/FlexWrapper';
import React, {useContext} from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';

import {SkillsContext} from '@/context/SkillsContext';
import {Skill} from '@/layouts/sections/skils/skill/Skill';

export const Skills = () => {
    const skills = useContext(SkillsContext);

    return (
        <StyledSkills>
            <SectionTitle></SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill/>
            </FlexWrapper>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
 
background-color: aquamarine;
  min-height: 100vh;
`

