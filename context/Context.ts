import { createContext } from 'react';
import {skills, SkillType, social, SocialType} from '../data/data';

export const Context = createContext<SkillType[]>(skills);
export const Social = createContext<SocialType[]>(social)