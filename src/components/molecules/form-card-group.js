import React from 'react';

const FormCardGroup = ({ children, title }) => {
  return (
    <React.Fragment>
      <section className="card">
        <header className="card-header">
          <h2 className="title is-3 card-header-title">{title}</h2>
        </header>
        <aside className="card-content">{children}</aside>
      </section>
      <br />
    </React.Fragment>
  );
};

export default FormCardGroup;
