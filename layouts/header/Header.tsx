import React from 'react';
import styled from 'styled-components';
import {Menu} from '@/components/menu/Menu';
import {Logo} from '@/components/logo/Logo';
import {Container} from '@/components/Container';
import {FlexWrapper} from '@/components/FlexWrapper';
import {theme} from '@/styles/theme';
import {MobileMenu} from '@/components/menu/MobileMenu';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  margin: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
