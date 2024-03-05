import React from 'react';
import {IconContext} from 'react-icons';
import {IconType} from 'react-icons';
import styled from 'styled-components';
import iconSprite from '@/assets/image/icons-sprite.svg'
type PropsType = {
    icon?: IconType | string;
    size?: string;
    color?: string;
    id:string
};

export const Icon = (props:any) => {
    return (
        <>
            <svg role="img" width={50} height={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><use xlinkHref={`${iconSprite}#${props.id}`}/></svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

            </svg>
            <span>{props.id}</span>
        </>

    );
};