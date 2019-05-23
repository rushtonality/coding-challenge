import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ArticleForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div>
        <Field className="form-control" name="title" component="input" type="text" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div>
        <Field className="form-control" name="author" component="input" type="text" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <div>
          <Field className="form-control" name="tags" component="input" type="text"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <div>
          <Field className="form-control" name="description" component="textarea"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="created_at">Created</label>
        <div>
          <Field readonly="true" className="form-control" name="created_at" component="input" type="text"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="updated_at">Updated</label>
        <div>
          <Field readonly="true" className="form-control" name="updated_at" component="input" type="text"/>
        </div>
      </div>

      <button className="btn btn-secondary" type="submit">Submit</button>
    </form>
  )
}

ArticleForm = reduxForm({
  form: 'article'
})(ArticleForm)

export default ArticleForm