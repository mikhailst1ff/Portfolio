import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Work} from '@/layouts/sections/works/work/work';
import {Container} from '@/components/Container';
import inst from '@/assets/image/inst.png'
import cards from '@/assets/image/cards.png'
import todo from '@/assets/image/todo.png'



export const Works: React.FC = () => {
    return (
        <StyledWorks id="projects">
            <Container>
                <SectionTitle>My works</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={'30px'}>
                    <Work title={'Learning-cards'} srcProd={'https://learning-cards-kappa.vercel.app/'}
                          srcGit={'https://github.com/notMikle/cards'}
                          description={'This project educational cards game, create decks of cards with questions and answers and learn easily'}
                          stack={'Tech stack : React, TypeScript, RTK Query, React-hook-forms, Radix UI'}
                            image={cards.src}
                    />
                    <Work title={'Todolist'} srcProd={'https://notmikle.github.io/todo'}
                          srcGit={'https://github.com/notMikle/todo'}
                          description={'This project is a Todolist. Organize your tasks here. CRUD operation, authorization, Login: free@samuraijs.com Password: free'}
                          stack={'Tech stack : React, TypeScript, Redux Toolkit, Formik, Axios, MUI'}
                          image={todo.src}
                    />
                    <Work title={'Instagram'} srcProd={'https://breezeapp.club/'}
                          srcGit={'https://github.com/instaitincubator/instagram'}
                          description={'This project is a copy of Instagram, in the process of development by the it-incubator team'}
                          stack={'Tech stack : NextJS, TypeScript, RTK Query, Tailwind, React-hook-forms, FSD, WebSocket'}
                    image={inst.src}
                    />
                    <Work title={'CryptoTestTask'} srcProd={'https:/https://breezeapp.club/'}
                          srcGit={'https://github.com/instaitincubator/instagram'}
                          description={'This is test task for crypto-currency'}
                          stack={'Tech stack : NextJS, TypeScript, RTK Query, Tailwind, React-hook-forms, FSD'}/>
                    <Work
                        title={'GameCatchGoogle'} srcProd={'https:/https://breezeapp.club/'}
                        srcGit={'https://github.com/instaitincubator/instagram'}
                        description={'This project is a copy of Instagram, in the process of development by the it-incubator team'}
                        stack={'Tech stack : NextJS, TypeScript, RTK Query, Tailwind, React-hook-forms, FSD, WebSocket'}/>
                    <Work
                        title={'NextRickAndMorty'} srcProd={'https:/https://breezeapp.club/'}
                        srcGit={'https://github.com/instaitincubator/instagram'}
                        description={'This project is a copy of Instagram, in the process of development by the it-incubator team'}
                        stack={'Tech stack : NextJS, TypeScript, RTK Query, Tailwind, React-hook-forms, FSD'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`

`
