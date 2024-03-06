import {FlexWrapper} from '@/components/FlexWrapper';
import React, {useContext} from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {SkillsContext} from '@/context/SkillsContext';

import {FaBars} from 'react-icons/fa';
import {Icon} from '@/components/icon/icon';

export const Skills = () => {
    const skills = useContext(SkillsContext);

    return (
        <StyledSkills>
            <SectionTitle></SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                {skills.map(el=><Icon icon={el.icon} color={el.color} size={"100"}/>)}
            </FlexWrapper>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`

  background-color: aquamarine;
  min-height: 100vh;
`

