import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {FlexWrapper} from '@/components/FlexWrapper';
import {Work} from '@/layouts/sections/works/work/work';
import {Container} from '@/components/Container';
import inst from '@/assets/image/inst.png'
import cards from '@/assets/image/cards.png'
import todo from '@/assets/image/todo.png'
import rick from '@/assets/image/rick.png'
import blog from '@/assets/image/blog.png'
import bandido from '@/assets/image/bandido.png'




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
                    <Work title={'NextJS-blog'} srcProd={'https://nextjs-blog-smoky-nu-68.vercel.app/'}
                          srcGit={'https://github.com/notMikle/nextjs-blog'}
                          description={'This is blog with Next and Sanity'}
                          stack={'Tech stack : NextJS, JS, Sanity, Scss'}
                          image={blog.src}/>
                    <Work
                        title={'BandidoBarber'} srcProd={'https://bandido-steel.vercel.app/'}
                        srcGit={'https://github.com/notmikle/bandido'}
                        description={'This project is e-commerce barbershop'}
                        stack={'Tech stack : React, Redux, Scss, React-hook-forms'}
                        image={bandido.src}
                    />
                    <Work
                        title={'NextRickAndMorty'} srcProd={'https://next-rick-and-morty-pi.vercel.app/'}
                        srcGit={'https://github.com/notMikle/nextRickAndMorty'}
                        description={'This project is a test nextJS'}
                        stack={'Tech stack : NextJS, TypeScript, Axios'}
                        image={rick.src}/>

                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`

`
