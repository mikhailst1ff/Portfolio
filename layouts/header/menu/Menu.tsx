import React, {useContext} from 'react';
import {Icon} from '@/components/icon/icon';
import {Social} from '@/context/Context';
import {NavLink, LinkSocial, ListItem} from '@/layouts/header/menu/StyledMenuComponents';

export const Menu: React.FC = () => {
    const network = useContext(Social);
    return (
        <div>
            <ul>
                <ListItem><NavLink to={'main'} smooth={true} activeClass='active'
                                   spy={true}>Home</NavLink></ListItem>
                <ListItem><NavLink to={'skills'} smooth={true} activeClass={'active'}
                                   spy={true}>Skills</NavLink></ListItem>
                <ListItem><NavLink to={'projects'} smooth={true} activeClass={'active'}
                                   spy={true}>Projects</NavLink></ListItem>
                <ListItem><NavLink to={'contacts'} smooth={true} activeClass={'active'}
                                   spy={true}>Contacts</NavLink></ListItem>
                <li>
                    {network.map(el => <LinkSocial key={el.network} href={el.href}><Icon icon={el.icon} size={'25px'}/>
                    </LinkSocial>)}
                </li>
            </ul>
        </div>
    );
};
