import React from 'react';
import ReactDOM from 'react-dom';
import ArticleForm from './ArticleForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticleForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
