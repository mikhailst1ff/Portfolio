import styled, {css} from 'styled-components';
import {theme} from '@/styles/theme';

export const StyledMenuMobile = styled.nav`
`
export const StyledMenuDesktop = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`
export const LinkWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(79, 76, 76, 0.88);
  display: none;

  ${props => props.isOpen && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
`
export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 8888888;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 40px;
    bottom: 65px;

    ${props => props.isOpen && css`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      display: block;
      content: '';
      width: 36px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      transform: translateY(-10px);
      ${props => props.isOpen && css`
        transform: rotate(45deg);
      `}
    }

    &::after {
      display: block;
      content: '';
      width: 24px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css`
        transform: rotate(-45deg);
        width: 36px;
      `}
    }
  }
`
export const ListItem = styled.li`
  &:hover {
  }
`
export const Link = styled.a`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.colors.primaryText};

  &:hover {
    color: ${theme.colors.secondaryText};
    transform: translateY(-1px);
  }
`
export const LinkSocial = styled.a`
  display: inline-block;
  color: ${theme.colors.primaryText};
  padding-right: 20px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.secondaryText};
    transform: translateY(-1px);
  }
`

