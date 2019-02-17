import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { GlobalFullHeight } from 'styles/globals';

const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: left;
`;

const Message = styled.section``;

const Title = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1.6rem;
`;

const GoBack = styled(Link)`
  margin-top: 2rem;
  font-size: 1.4rem;
`;

const NotFoundPage = () => (
  <Layout>
    <Page>
      <GlobalFullHeight />
      <Message>
        <Title>404 - Page not found</Title>
        <Text>You just hit a route that doesn't exist... the sadness.</Text>
      </Message>
      <GoBack to="/" activeClassName="active">
        Go back to the CV
      </GoBack>
    </Page>
  </Layout>
);

export default NotFoundPage;
