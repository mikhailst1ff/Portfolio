import { createContext } from 'react';
import { skills, SkillType } from '../data/data';

export const SkillsContext = createContext<SkillType[]>(skills);