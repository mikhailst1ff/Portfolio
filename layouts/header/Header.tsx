'use client'

import React, {useEffect, useState} from 'react';
import {DesktopMenu} from '@/layouts/header/menu/DesktopMenu';
import {Logo} from '@/components/logo/Logo';
import {Container} from '@/components/Container';
import {FlexWrapper} from '@/components/FlexWrapper';
import {MobileMenu} from '@/layouts/header/menu/MobileMenu';
import {StyledHeader} from '@/layouts/header/Header_styles';
import {animateScroll as scroll} from 'react-scroll'

export const Header: React.FC = () => {
    const [width, setWidth] = useState<null|number>(null)
    const breakpoint = 768

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <a href={'#main'} onClick={()=>scroll.scrollToTop()}><Logo/></a>
                     {width && width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

