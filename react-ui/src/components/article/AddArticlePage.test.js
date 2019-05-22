import React from 'react';
import ReactDOM from 'react-dom';
import AddArticlePage from './AddArticlePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddArticlePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
