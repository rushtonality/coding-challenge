import React from 'react'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { fetchArticle } from "../actions/ArticleActions";

let ContactForm = props => {
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

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

ContactForm = connect(
  state => ({
    loading: state.article.loading,
    error: state.article.error,
    initialValues: state.article.data // pull initial values from account reducer
  }),
  { 
    load: fetchArticle 
  } // bind account loading action creator
)(ContactForm)

export default ContactForm