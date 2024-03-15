import React, {useContext} from 'react';
import {Icon} from '@/components/icon/icon';
import {Social} from '@/context/Context';
import {Link, LinkSocial, ListItem} from '@/layouts/header/menu/StyledMenuComponents';

export const Menu:React.FC = () => {
    const network = useContext(Social);
    return (
        <div>
            <ul>
                <ListItem><Link href="">Home</Link></ListItem>
                <ListItem><Link href="">Skills</Link></ListItem>
                <ListItem><Link href="">Projects</Link></ListItem>
                <ListItem><Link href="">Contacts</Link></ListItem>
                <li>
                    {network.map(el => <LinkSocial key={el.network}><Icon icon={el.icon} size={'25px'}/>
                    </LinkSocial>)}
                </li>
            </ul>
        </div>
    );
};
