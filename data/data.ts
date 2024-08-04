import {IconType} from 'react-icons';
import {FaReact} from 'react-icons/fa';
import {
    SiAntdesign,
    SiJest,
    SiMui,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRedux,
    SiStyledcomponents,
    SiNextdotjs,
    SiTelegram,
    SiGithub,
    SiMaildotru
} from 'react-icons/si';

import {
   TbBrandStorybook, TbBrandTypescript, TbBrandRadixUi
} from 'react-icons/tb';
import {DiJavascript1, DiSass} from 'react-icons/di';
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
        icon: SiNextdotjs,
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
        title: 'TypeScript',
        icon: TbBrandTypescript,
        color: '#3077c5',
    },
    {
        title: 'SASS',
        icon: DiSass,
        color: '#cc6699',
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
        title: 'REST API',
        icon: AiOutlineCloudServer,
        color: '#39a6dd',
    },

];

export type SocialType = {
    network: string
    href: string
    icon: IconType
}
export const social = [
    {
        network: 'TG',
        href: 'https:/t.me/notMikle',
        icon: SiTelegram,
    },
    {
        network: 'Git',
        href: 'https:/github.com/notMikle',
        icon: SiGithub,
    },
]