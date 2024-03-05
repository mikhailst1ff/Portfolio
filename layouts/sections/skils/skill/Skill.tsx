import React from 'react';
import {Icon} from '@/components/icon/icon';
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
            <Icon id='Axios'></Icon>
            <Icon id='docker'></Icon>
            {/*<SkillTitle>{props.title}</SkillTitle>*/}
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
`
const SkillTitle = styled.h3`
`
