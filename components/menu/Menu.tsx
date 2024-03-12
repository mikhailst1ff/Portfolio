import React, {useContext} from 'react';
import styled from 'styled-components';
import {Icon} from '@/components/icon/icon';
import {Social} from '@/context/Context';
import {theme} from '@/styles/theme';


export const Menu = () => {
    const network = useContext(Social);
    return (
        <StyledMenu>
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
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
  @media ${theme.media.tablet}{
    display: none ;
  
  }
`
const ListItem = styled.li`
  &:hover{

  }
`
const Link = styled.a`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.colors.primaryText};
  &:hover {
    color: ${theme.colors.secondaryText};
    transform: translateY(-1px);
  }
`
const LinkSocial = styled.a`
  display: inline-block;
  color: ${theme.colors.primaryText};
  padding-right: 20px;
  cursor: pointer;
  &:hover{
    color: ${theme.colors.secondaryText};
    transform: translateY(-1px);
  }
`