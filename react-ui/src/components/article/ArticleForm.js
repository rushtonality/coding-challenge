import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ArticleForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <Field name="author" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

ArticleForm = reduxForm({
  form: 'article'
})(ArticleForm)

export default ArticleForm