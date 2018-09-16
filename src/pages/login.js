import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'styled-components';
import { push } from 'gatsby-link';

import GoogleButton from '../components/GoogleButtonLogin';
import { LoginWithGoogle, getToken } from '../helpers/auth';

const global = css`
  html {
    height: 100%;
  }
`;

injectGlobal`
${global}
`;

const LoginPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginBox = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 0;
`;

export default class Login extends Component {
  login = () => {
    LoginWithGoogle()
      .then(this.redirectToEdit)
      .catch(err => {
        console.log('eita porra', err);
      });
  };

  componentWillMount = () => {
    if (getToken()) {
      this.redirectToEdit();
    }
  };

  redirectToEdit = () => push('/edit');
  render() {
    return (
      <LoginPage>
        <LoginBox>
          <Title>Edit CV Login</Title>
          <GoogleButton onClick={this.login} />
        </LoginBox>
      </LoginPage>
    );
  }
}
