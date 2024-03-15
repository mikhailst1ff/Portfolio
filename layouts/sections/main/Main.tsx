import React from 'react';
import img from '../../../assets/image/photo.png'
import {FlexWrapper} from '@/components/FlexWrapper';
import {Container} from '@/components/Container';
import {
    Name,
    Photo,
    PhotoWrapper,
    SmallText, SQR,
    SQRwrapper,
    StyledMain,
    StyleH1,
    TextBlock
} from '@/layouts/sections/main/MainStyled';

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <TextBlock>
                        <SmallText>Hi there</SmallText>
                        <Name>I am <span>Polshin Mikhail</span></Name>
                        <StyleH1>A Web Developer</StyleH1>
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={img.src} alt=""/>
                        <SQRwrapper>
                            <SQR $deg="105"></SQR>
                            <SQR $deg="120"></SQR>
                            <SQR $deg="135"></SQR>
                            <SQR $deg="150"></SQR>
                            <SQR $deg="165"></SQR>
                        </SQRwrapper>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
