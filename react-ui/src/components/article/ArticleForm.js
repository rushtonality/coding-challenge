import React from 'react';
import { Field, reduxForm } from 'redux-form';

const titleRequired = value => value ? undefined : 'Please Enter a Title'
const authorRequired = value => value ? undefined : 'Please Enter an Author'
const descriptionRequired = value => value ? undefined : 'Please Enter Description'

const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="control-label" htmlFor="title">{label}</label>
    <div>
    <input placeholder={placeholder} className={(touched && error) ? "form-control is-invalid" : "form-control"} {...input} type={type}/>
    {touched && ((error && <span className="invalid-feedback">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderTextArea = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="control-label" htmlFor="title">{label}</label>
    <div>
    <textarea placeholder={placeholder} className={(touched && error) ? "form-control is-invalid" : "form-control"} {...input} type={type}/>
    {touched && ((error && <span className="invalid-feedback">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let ArticleForm = props => {
  const { handleSubmit, submitting } = props

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <Field name="title"
        label="Title"
        placeholder="Title"
        validate={titleRequired}
        component={renderField} type="text" />

      <Field name="author" 
          label="Author"
          placeholder="Author"
          validate={authorRequired}
          component={renderField} type="text" />

      <Field name="tags" 
          label="Tags"
          component={renderField} type="text" />

      <Field className="form-control" name="description" 
          label="Description"
          placeholder="Description"
          validate={descriptionRequired}
          component={renderTextArea}/>

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

      <div>
        <button className="btn btn-secondary" type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

ArticleForm = reduxForm({
  form: 'article'
})(ArticleForm)

export default ArticleForm