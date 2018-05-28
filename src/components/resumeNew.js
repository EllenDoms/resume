import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'; //navigate in app
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { ShortField, LongField, Timeline, MultiField, MultiFieldLong, ProgressBar, Tooltip } from './form';
import { postResume } from '../actions';

const errors = {};

class ResumeNew extends Component {
  onSubmit = (values) => {
    console.log(values);
    validate(values);
    console.log(errors);
    if(errors == "") {
      console.log("still errors")
    } else {
      this.props.postResume(values);
    }
  }
  render() {
    const { handleSubmit } = this.props;
    const required = value => (value ? undefined : 'Required')
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <h1>Add your resume</h1>
          <h2>General</h2>
          <Field label='First Name' name='information.firstName' component={ShortField} className='half left' /> {/*  required */}
          <Field label='Last Name' name='information.lastName' component={ShortField} className='half right' /> {/*  required */}
          <Field label='Email' name='information.email' component={ShortField} className='half left' type='email' />
          <Field label='telephone' name='information.telephone' component={ShortField} className='half right' type='telephone' />
          <Field label='Website' name='information.website' component={ShortField} className='whole' type='website' />
          <Field label='LinkedIn' name='information.linkedin' component={ShortField} className='whole' /> {/*  required */}
          <Field label='Dribbble' name='information.dribbble' component={ShortField} className='whole' /> {/*  required */}
          <Field label='Github' name='information.github' component={ShortField} className='whole' /> {/*  required */}
          <Field label='Quote' name='information.quote' component={LongField} className='whole' /> {/*  required */}

          <h2>Intro</h2>
          <Field label='Title' name='intro.title' component={ShortField} /> {/*  required */}
          <FieldArray label='' name='intro.content' component={MultiFieldLong} /> {/*  required */}

          <h2>Experience</h2>
          <FieldArray label={[ 'Job title', 'Company', 'From', 'Until' ]} name='experience' component={Timeline}/>
          {/* more than one, together with education max 6 */}
          <FieldArray label={['Title', 'Description']} name='experience' component={Tooltip} />

          <h2>Education</h2>
          <FieldArray label={[ 'Title', 'Degree', 'From', 'Until' ]} name='education' component={Timeline}/>
          {/* more than one, together with education max 6 */}
          <FieldArray label={['Title', 'Description']} name='education' component={Tooltip} />

          <h2>Expertise</h2>
          <FieldArray label={['Title', 'Rating']} name='expertise' component={ProgressBar} />
          {/* more than one, skill/2 + expertise less than 11 */}
          <FieldArray label={['Title', 'Description']} name='expertise' component={Tooltip} />

          <h2>Skills</h2>
          <FieldArray label='' name='skills' component={MultiField} />
          {/* more than one, skill/2 + expertise less than 11 */}
          <FieldArray label={['Title', 'Description']} name='skills' component={Tooltip} />

          <h2>Personality</h2>
          <FieldArray label='' name='personality' component={MultiField} /> {/*  required */}
          <FieldArray label={['Title', 'Description']} name='personality' component={Tooltip} />

          <h2>Passions</h2>
          <FieldArray label='' name='passions' component={MultiField} /> {/*  required */}
          <FieldArray label={['Title', 'Description']} name='passions' component={Tooltip} />

          <button className='saveBtn' type='submit'>Save!</button>
        </form>

      </div>
    )
  }
}

function validate(values) { //validate function will automatically be called by redux-form

  //values.intro.content.map(paragraph => { return characters = characters + paragraph.length });
  //check if input is ok

  //Information
  if(!values.information) {errors.information = "Fill in all information fields."}
  else if (!values.information.firstName) {errors.information= "Fill in first name."}
  else if (!values.information.lastName) {errors.information= "Fill in last name."}
  else if (!values.information.email) {errors.information= "Fill in your email."}
  else if (!values.information.quote) {errors.information= "Fill in a quote."}

  //Experience & education
  if(!values.experience) { errors.experience = "Enter at least one experience."
  } else { values.experience.map(index => {
    if(!index.title || !index.where || !index.timefrom || !index.timeto) {
      errors.experience = `Fill in all fields for every experience.` }
  })};
  if(!values.education) { errors.education = "Enter at least one education." };
  if(values.education && values.experience) {
    if(values.education.length + values.experience.length > 8) {
      errors.education = "Input for education and experience combined can be no more than 8."
      errors.experience = "Input for education and experience combined can be no more than 8."
    }
  };

  //Intro
  if(!values.intro) { errors.intro = "Add an introduction" }
  else if(!values.intro.title) { errors.intro = "Add a title to the introduction" }
  else if(!values.intro.content) { errors.intro = "Add a description to the introduction" }
  else if(!values.intro.content.length > 5) { errors.intro = "Introduction can be a maximum of 5 paragraphs."}
  else {
    let characters = 0;
    values.intro.content.map(paragraph => { return characters = characters + paragraph.length });
    console.log(characters);

    if(characters > 800) { errors.intro = "Add a description between 400 and 800 characters" }
    else if(characters < 400) { errors.intro = "Add a description between 400 and 800 characters" };
  };

  //Skills & expertise
  if(!values.skills) { errors.skills = "Enter at least one skill." };
  if(!values.expertise) { errors.expertise = "Enter at least one expertise" };
  if(values.skills && values.expertise) {
    if((values.skills.length/2 + values.expertise.length) > 11) { errors.skills = "Enter a maximum of 11 items for skills and expertise combined." }
  }

  //Personality
  if(!values.personality) { errors.personality = "Enter at least one personality value." }
  else if(values.personality > 10) {errors.personality = "Enter 10 personality items maximum"};
  //Passions
  if(!values.passions) { errors.passions = "Enter at least one passion." }
  else if(values.passions > 11) {errors.passions = "Enter 11 passion items maximum"};

  return errors;
}

export default reduxForm({
  form: 'resumeNew'
})(
  connect(null, { postResume }) (ResumeNew) //combine reduxForm and connect
)
