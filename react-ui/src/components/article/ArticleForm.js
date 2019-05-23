import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ArticleForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <div>
        <Field name="title" component="input" type="text" />
        </div>
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <div>
        <Field name="author" component="input" type="text" />
        </div>
      </div>

      <div>
        <label htmlFor="tags">Tags</label>
        <div>
          <Field name="tags" component="input" type="text"/>
        </div>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <div>
          <Field name="description" component="textarea"/>
        </div>
      </div>

      <div>
        <label htmlFor="created_at">Created</label>
        <div>
          <Field name="created_at" component="input" type="text"/>
        </div>
      </div>

      <div>
        <label htmlFor="updated_at">Updated</label>
        <div>
          <Field name="updated_at" component="input" type="text"/>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

ArticleForm = reduxForm({
  form: 'article'
})(ArticleForm)

export default ArticleForm