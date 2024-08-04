import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '@/components/SectionTitle';
import {Button} from '@/components/Button';
import {Container} from '@/components/Container';
import {theme} from '@/styles/theme';
import {SubmitHandler, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {Inputs, schema, sendMessage} from '@/layouts/sections/contacts/sendMessage';

export const ContactsContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>(
        {
            resolver: yupResolver(schema)
        }
    )
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await sendMessage(data);
            reset();
        } catch (error) {
            alert('Failed to send message');
        }
    }

    return (
        <StyledContacts id='contacts'>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <Field placeholder={'name'}  {...register('name')}/>
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    <Field placeholder={'phone'}  {...register('phone')}/>
                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                    <Field placeholder={'message'} as={'textarea'} {...register('message')}/>
                    {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                    <Button type={'submit'}>send</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
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
  color: ${theme.colors.primaryText};
  &::placeholder{
    color: ${theme.colors.secondaryText};
  }
  &:focus-visible{
    outline: 1px solid ${theme.colors.primaryBorder}
  }
`
const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    align-self: flex-start;
`;
