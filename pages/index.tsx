import {Header} from '@/layouts/header/Header';
import {Main} from '@/layouts/sections/main/Main';
import {Skills} from '@/layouts/sections/skils/Skils';
import {SkillsContext} from '@/context/SkillsContext';
import {skills} from '@/data/data';
import {Works} from '@/layouts/sections/works/Works';

export default function Home() {
    return (
        <>
            <SkillsContext.Provider value={skills}>
                <Header/>
                <Main/>
                <Skills/>
                <Works/>
            </SkillsContext.Provider>
        </>
    );
}
