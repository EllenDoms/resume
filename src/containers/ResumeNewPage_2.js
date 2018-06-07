import React, { Component } from 'react';
import { Field, Fields, FieldArray, reduxForm } from 'redux-form';
import { ShortField, LongField, Timeline, MultiField, ParagraphFields, ProgressBar, Tooltip } from '../components/form';
import validate from './validate.js';

const ResumeNewPage_2 = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div id="modal">
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Intro</h2>
        <Field name='intro.title' label='Title *' component={ShortField} />
        <FieldArray label='' name='intro.content' component={ParagraphFields} /> {/* more than one, max 5. Characters 400 - 800 */}

        <button type='submit' className='saveBtn' >Save!</button>
        <button type='button' className='previousBtn' onClick={previousPage}>Previous</button>
      </form>

    </div>
  )

}

export default reduxForm({
  validate,
  form: 'resumeNew',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(ResumeNewPage_2)
