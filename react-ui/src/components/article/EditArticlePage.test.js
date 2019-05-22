import React from 'react';
import ReactDOM from 'react-dom';
import EditArticlePage from './EditArticlePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditArticlePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
