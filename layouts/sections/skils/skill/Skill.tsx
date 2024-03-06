import React from 'react';
import styled from 'styled-components';


type SkillPropsType = {
    title: string
    icon: any
    color:string
    size:string
}
export const Skill = (props:any) => {
    return (
        <StyledSkill>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
`
const SkillTitle = styled.h3`
`
