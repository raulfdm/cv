import React, { Component } from 'react';
import { push } from 'gatsby-link';

import { removeToken, getToken } from '../helpers/auth';

export default class EditPage extends Component {
  componentWillMount = () => {
    if (!getToken()) {
      push('/login');
    }
  };

  logout = () => {
    removeToken();
    push('/login');
  };

  render() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        <h1>Edit page :)</h1>
      </div>
    );
  }
}
