import React from 'react';

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {children}
    <button type="submit">Entrar</button>
  </form>
);

export default Form;