import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Form, Field } from 'react-final-form';

import { useCvService } from 'src/config/useCvService';
import { GlobalFullHeight } from 'src/styles/globals';
import Layout from 'components/layout';
import BackToCvButton from 'molecules/back-to-cv-button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  font-size: 1.4rem;
`;

const StyldButton = styled.button`
  background-color: #fff;
  border: 1px solid rgba(22, 22, 22, 0.2);
  border-radius: 0.25rem;
  color: #444;
  font-weight: 500;
  letter-spacing: 0.25px;
  margin: 0.5rem;
  overflow: hidden;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  background-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(17, 17, 17, 0.08) 100%
  );
  color: #111;
  cursor: pointer;
`;

const ErrorLabel = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  margin-top: 0;
`;

const StyledField = styled(Field)`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  color: rgba(0, 0, 0, 0.7);
  font-family: 'Source Sans Pro', 'Lucida Grande', sans-serif;
  font-size: 100%;
  height: 38px;
  line-height: 1.15;
  margin: 0.5rem;
  overflow: visible;
  padding: 1rem 0.5rem;
  position: relative;
  width: 100%;
`;

const GlobalStyles = createGlobalStyle`
  #__next{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 1.6rem;
`;

const Login = () => {
  const { service } = useCvService();
  const [error, setError] = React.useState('');

  const signIn = authForm => {
    service
      .login(authForm.email, authForm.password)
      .then(() => {
        alert('sucess');
        window.location.href = '/edit';
        setError('');
      })
      .catch(e => {
        console.log('aisiasok', e);
        setError('User not registered');
      });
  };

  // if (isAuth) {
  //   window.location.href = '/edit';
  // }

  return (
    <Layout>
      <GlobalFullHeight />
      <GlobalStyles />
      <Title>Login to edit</Title>
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={signIn}
        render={({ handleSubmit }) => {
          return (
            <StyledForm onSubmit={handleSubmit}>
              <StyledField
                type="email"
                component="input"
                placeholder="john_doe@gmail.com"
                name="email"
                required
              />
              <StyledField
                type="password"
                component="input"
                name="password"
                placeholder="Your secrets here"
                required
              />
              <StyldButton type="submit" data-cy="btn-login">
                Login
              </StyldButton>
            </StyledForm>
          );
        }}
      />
      {error && <ErrorLabel data-cy="error-message">{error}</ErrorLabel>}
      <BackToCvButton data-cy="back-to-home" />
    </Layout>
  );
};

export default Login;
