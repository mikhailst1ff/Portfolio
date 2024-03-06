import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Work} from '@/layouts/sections/works/work/work';

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <FlexWrapper justify={'space-around'}>
                <Work title={'socialNetwork'} src={''} description={'lorem'}/>
                <Work title={'todo'} src={''} description={'lorem ipsum'}/>
            </FlexWrapper>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: antiquewhite;
`
