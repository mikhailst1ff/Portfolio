import React, {useEffect, useState} from 'react';
import {DesktopMenu} from '@/layouts/header/menu/DesktopMenu';
import {Logo} from '@/components/logo/Logo';
import {Container} from '@/components/Container';
import {FlexWrapper} from '@/components/FlexWrapper';
import {MobileMenu} from '@/layouts/header/menu/MobileMenu';
import {StyledHeader} from '@/layouts/header/Header_styles';

export const Header: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

