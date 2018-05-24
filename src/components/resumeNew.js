import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'; //navigate in app
import { Field, FieldArray, reduxForm } from 'redux-form';
import { ShortField, LongField, Timeline, MultiField, ProgressBar, Tooltip } from './form';


// form with all items
//

class ResumeNew extends Component {
  onSubmit = (values) => {
  console.log(values);
  // this.props.createPosts(values, () => {
  //   this.props.history.push('/');
  // });
}
  render() {
    const { handleSubmit } = this.props;
    const required = value => (value ? undefined : 'Required')
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <h2>General</h2>
          <Field label='First Name' name='firstname' component={ShortField} /> {/*  required */}
          <Field label='Last Name' name='lastname' component={ShortField} /> {/*  required */}
          <Field label='Email' name='email' component={ShortField} />
          <Field label='Website' name='website' component={ShortField} />
          <Field label='telephone' name='telephone' component={ShortField} />
          <Field label='LinkedIn' name='linkedin' component={ShortField} /> {/*  required */}
          <Field label='Dribbble' name='dribbble' component={ShortField} /> {/*  required */}
          <Field label='Github' name='github' component={ShortField} /> {/*  required */}
          <Field label='Quote' name='quote' component={LongField} /> {/*  required */}

          <h2>Experience</h2>
          <FieldArray label={[ 'Job title', 'Company', 'From', 'Until' ]} name='experience' component={Timeline}/>
          {/* more than one, together with education max 6 */}

          <h2>Education</h2>
          <FieldArray label={[ 'Title', 'Degree', 'From', 'Until' ]} name='education' component={Timeline}/>
          {/* more than one, together with education max 6 */}

          <h2>Skills</h2>
          <FieldArray label='' name='skill' component={MultiField} />
          {/* more than one, skill/2 + expertise less than 11 */}

          <h2>Expertise</h2>
          <FieldArray label={['Title', 'Rating']} name='expertise' component={ProgressBar} />
          {/* more than one, skill/2 + expertise less than 11 */}

          <h2>Intro</h2>
          <Field label='Title' name='introtitle' component={ShortField} /> {/*  required */}
          <Field label='Description' name='introdesc' component={LongField} /> {/*  required */}

          <h2>Personality</h2>
          <FieldArray label='' name='personality' component={MultiField} /> {/*  required */}

          <h2>Passions</h2>
          <FieldArray label='' name='passions' component={MultiField} /> {/*  required */}

          <h2>Tooltips</h2>
          <FieldArray label={['', 'Title', 'Description']} name='tooltip' component={Tooltip} />

          <button type='submit'>Submit</button>
        </form>

      </div>
    )
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'resumeNew'
})(ResumeNew)
