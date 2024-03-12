import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {Button} from '@/components/Button';
import {Container} from '@/components/Container';
import {theme} from '@/styles/theme';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}></Field>
                    <Field placeholder={'subject'}></Field>
                    <Field placeholder={'message'} as={'textarea'}></Field>
                    <Button type={'submit'}>send</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  ${Button}{
    border: 1px solid ${theme.colors.primaryWork};
  }
  textarea {
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  padding: 7px 15px;
  font-size: 14px;
  letter-spacing: 0.05em;
  background-color: ${theme.colors.primaryWork};
  border: 1px solid ${theme.colors.primaryBorder};
  color: ${theme.colors.secondaryText};
  &::placeholder{
    color: ${theme.colors.primaryText};
  }
  &:focus-visible{
    outline: 1px solid ${theme.colors.primaryBorder}
  }
`
