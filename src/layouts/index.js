import React from 'react';
import PropTypes from 'prop-types';
import '../globals/global-styles';

const Layout = ({ children }) => <React.Fragment>{children()}</React.Fragment>;

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
