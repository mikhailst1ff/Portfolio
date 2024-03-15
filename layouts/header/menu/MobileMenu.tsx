import React, {useState} from 'react';
import {Menu} from '@/layouts/header/menu/Menu';
import {BurgerButton, LinkWrapper, StyledMenuMobile} from '@/layouts/header/menu/StyledMenuComponents';



export const MobileMenu:React.FC = () => {
    const [showBurger, setShowBurger] = useState(false)
    return (
        <StyledMenuMobile>
            <BurgerButton isOpen={showBurger} onClick={()=>setShowBurger(!showBurger)}><span/></BurgerButton>
            <LinkWrapper isOpen={showBurger}>
                <Menu/>
            </LinkWrapper>
        </StyledMenuMobile>
    );
};




