import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../globals/global-styles';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
