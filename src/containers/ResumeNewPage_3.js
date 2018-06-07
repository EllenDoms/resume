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

        <h2>Experience</h2>
        <FieldArray label={[ 'Job title', 'Company', 'From', 'Until' ]} name='experience' component={Timeline}/> {/* more than one, together with education max 6 */}
        <FieldArray label={['Title', 'Description']} name='experience' component={Tooltip} />

        <h2>Education</h2>
        <FieldArray label={[ 'Title', 'Degree', 'From', 'Until' ]} name='education' component={Timeline}/> {/* more than one, together with education max 6 */}
        <FieldArray label={['Title', 'Description']} name='education' component={Tooltip} />

        <h2>Expertise</h2>
        <FieldArray label={['Title', 'Rating (%)']} name='expertise' component={ProgressBar} /> {/* more than one, skill/2 + expertise less than 11 */}
        <FieldArray label={['Title', 'Description']} name='expertise' component={Tooltip} />

        <h2>Skills</h2>
        <FieldArray label='' name='skills' component={MultiField} />{/* more than one, skill/2 + expertise less than 11 */}
        <FieldArray label={['Title', 'Description']} name='skills' component={Tooltip} />

        <h2>Personality</h2>
        <FieldArray label='' name='personality' component={MultiField} /> {/* more than one */}
        <FieldArray label={['Title', 'Description']} name='personality' component={Tooltip} />

        <h2>Passions</h2>
        <FieldArray label='' name='passions' component={MultiField} /> {/* more than one */}
        <FieldArray label={['Title', 'Description']} name='passions' component={Tooltip} />

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
