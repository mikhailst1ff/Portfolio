import {Header} from '@/layouts/header/Header';
import {Main} from '@/layouts/sections/main/Main';
import {Skills} from '@/layouts/sections/skils/Skils';
import {Context, Social} from '@/context/Context';
import {skills, social} from '@/data/data';
import {Works} from '@/layouts/sections/works/Works';
import {Contacts} from '@/layouts/sections/contacts/contacts';
import {Footer} from '@/layouts/sections/footer/Footer';
import {GlobalStyle} from '@/styles/GlobalStyled';



export default function Home() {
    return (
        <>
            <GlobalStyle/>
            <Context.Provider value={skills}>
                <Social.Provider value={social}>
                <Header/>
                <Main/>
                <Skills/>
                <Works/>
                <Contacts/>
                <Footer/>
                </Social.Provider>
            </Context.Provider>
        </>
    );
}
