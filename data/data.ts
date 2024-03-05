import axios from "@/assets/image/axios.svg"
import docker from "@/assets/image/docker.svg"
import * as git from "@/assets/image/git.svg"
import graphql from "@/assets/image/graphql.svg"
import htmx from "@/assets/image/htmx.svg"
import javascript from "@/assets/image/javascript.svg"
import mui from "@/assets/image/mui.svg"
import nextdotjs from "@/assets/image/nextdotjs.svg"
import nodedotjs from "@/assets/image/nodedotjs.svg"
import reactjs from "@/assets/image/react.svg"
import reacthookform from "@/assets/image/reacthookform.svg"
import reactquery from "@/assets/image/reactquery.svg"
import redux from "@/assets/image/redux.svg"
import sass from "@/assets/image/sass.svg"
import styledcomponents from "@/assets/image/styledcomponents.svg"
import typescript from "@/assets/image/typescript.svg"
import webpack from "@/assets/image/webpack.svg"

export type SkillType={
    title:string
    icon:SVGElement|string
    color:string
}

export const skills: SkillType[] = [
    {
        title: 'Axios',
        icon: axios,
        color: '#ffcc33',
    },
    {
        title: 'Docker',
        icon: docker ,
        color: '#fff',
    },
    {
        title: 'Git',
        icon: git,
        color: '#149eca',
    },
    {
        title: 'Graphql',
        icon: graphql,
        color: '#764abc',
    },
    {
        title: 'Htmx',
        icon: htmx,
        color: '#86d46b',
    },
    {
        title: 'Javascript',
        icon: javascript,
        color: '#3077c5',
    },
    {
        title: 'MUI',
        icon: mui,
        color: '#c63',
    },
    {
        title: 'Nextdotjs',
        icon: nextdotjs,
        color: '#017dc8',
    },
    {
        title: 'Nodedotjs',
        icon: nodedotjs,
        color: '#cc6699',
    },
    {
        title: 'React',
        icon: reactjs,
        color: '#fff',
    },
    {
        title: 'Reacthookform',
        icon: reacthookform,
        color: '#FFF',
    },
    {
        title: 'reactquery',
        icon: reactquery,
        color: '#0170fe',
    },
    {
        title: 'Redux',
        icon: redux,
        color: '#0081cb',
    },
    {
        title: 'SASS',
        icon: sass,
        color: '#ffd35b',
    },
    {
        title: 'Styled Components',
        icon: styledcomponents,
        color: '#f1618c',
    },
    {
        title: 'Typescript',
        icon: typescript,
        color: '#f44250',
    },
    {
        title: 'Webpack',
        icon: webpack,
        color: '#ec5990',
    },

];