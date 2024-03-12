import {IconType} from 'react-icons';
import {FaReact, FaYarn} from 'react-icons/fa';
import {
    SiAntdesign, SiApollographql,
    SiAxios,
    SiCssmodules,
    SiFigma, SiGraphql,
    SiJest,
    SiMui,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRedux, SiReduxsaga,
    SiStyledcomponents,
    SiWebpack,
    SiNextdotjs,
    SiTelegram,
    SiGithub,
    SiLinkedin,
} from 'react-icons/si';

import {
    TbBrandHtml5, TbBrandStorybook, TbBrandTypescript, TbBrandRadixUi
} from 'react-icons/tb';
import {DiCss3Full, DiJavascript1, DiNpm, DiSass} from 'react-icons/di';
import {BsGit} from 'react-icons/bs';
import {AiOutlineCloudServer} from 'react-icons/ai';

export type SkillType = {
    title: string
    icon: IconType
    color: string
}


export const skills: SkillType[] = [
    {
        title: 'JavaScript',
        icon: DiJavascript1,
        color: '#ffcc33',
    },
    {
        title: 'Next',
        icon: SiNextdotjs ,
        color: '#fff',
    },
    {
        title: 'React',
        icon: FaReact,
        color: '#149eca',
    },
    {
        title: 'Redux Toolkit',
        icon: SiRedux,
        color: '#764abc',
    },
    {
        title: 'Redux Saga',
        icon: SiReduxsaga,
        color: '#86d46b',
    },
    {
        title: 'TypeScript',
        icon: TbBrandTypescript,
        color: '#3077c5',
    },
    {
        title: 'HTML',
        icon: TbBrandHtml5,
        color: '#c63',
    },
    {
        title: 'CSS',
        icon: DiCss3Full,
        color: '#017dc8',
    },
    {
        title: 'SASS',
        icon: DiSass,
        color: '#cc6699',
    },
    {
        title: 'CSS Modules',
        icon: SiCssmodules,
        color: '#fff',
    },
    {
        title: 'Radix UI',
        icon: TbBrandRadixUi,
        color: '#FFF',
    },
    {
        title: 'Ant Design',
        icon: SiAntdesign,
        color: '#0170fe',
    },
    {
        title: 'Material UI',
        icon: SiMui,
        color: '#0081cb',
    },
    {
        title: 'Styled Components',
        icon: SiStyledcomponents,
        color: '#ffd35b',
    },
    {
        title: 'Storybook',
        icon: TbBrandStorybook,
        color: '#f1618c',
    },
    {
        title: 'React Router',
        icon: SiReactrouter,
        color: '#f44250',
    },
    {
        title: 'React Hook Form',
        icon: SiReacthookform,
        color: '#ec5990',
    },
    {
        title: 'React Query',
        icon: SiReactquery,
        color: '#ff4154',
    },
    {
        title: 'Jest',
        icon: SiJest,
        color: '#c53d17',
    },
    {
        title: 'Axios',
        icon: SiAxios,
        color: '#5a29e4',
    },
    {
        title: 'REST API',
        icon: AiOutlineCloudServer,
        color: '#39a6dd',
    },
    {
        title: 'Git',
        icon: BsGit,
        color: '#f44c28',
    },
    {
        title: 'Webpack',
        icon: SiWebpack,
        color: '#1c78c1',
    },
    {
        title: 'Figma',
        icon: SiFigma,
        color: '#a259ff',
    },
];

export type SocialType ={
    network:string
    href:string
    color:string
    icon:IconType
}
export const social = [
    {
        network: 'TG',
        href: 't.me',
        icon:SiTelegram,
        color:'red'
    },
    {
        network: 'LI',
        href: 't.me',
        icon:SiLinkedin,
        color:'red'
    },
    {
        network: 'Git',
        href: 't.me',
        icon:SiGithub,
        color:'red'
    }
]