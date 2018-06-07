import React, { Component } from 'react';
import { Field, Fields, FieldArray, reduxForm } from 'redux-form';
import { ShortField, LongField, Timeline, MultiField, ParagraphFields, ProgressBar, Tooltip } from '../components/form';
import validate from './validate.js';

const ResumeNewPage_1 = props => {
  const { handleSubmit } = props
  return (
    <div id="modal">
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h2>General</h2>
        <Field name='information.firstName' label='First name *' component={ShortField} className='half left' type='text' />
        <Field name='information.lastName' label='Last name *' component={ShortField} className='half right' type='text' />
        <Field name='information.email' label='Email *' component={ShortField} className='half left' type='email' />
        <Field name='information.telephone' label='Telephone *' component={ShortField} className='half right' type='telephone' />
        <Field name='information.website' label='Website' component={ShortField} className='whole' type='website' />
        <Field name='information.linkedin' label='LinkedIn' component={ShortField} className='whole' />
        <Field name='information.dribbble' label='Dribbble' component={ShortField} className='whole' />
        <Field name='information.github' label='Github' component={ShortField} className='whole' />
        <Field name='information.quote' label='Quote *' component={LongField} className='whole' />

        <button type='submit' className='nextBtn'>Next</button>
      </form>

    </div>
  )
}

export default reduxForm({
  validate,
  form: 'resumeNew',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(ResumeNewPage_1)
