import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import '../style/form.css';

const required = value => (value ? undefined : 'Required');
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export class ShortField extends Component {
  render(field) {
    const { label, type, input, className } = this.props
    return (
      <div className={className} >
        <label>{label}</label>
        <input {...input} type={type} />
      </div>
    );
  }
}

export class LongField extends Component {
  render(field) {
    const { label, input } = this.props
    return (
      <div className='longField'>
        <label>{label}</label>
        <textarea {...input} type='text'/>
      </div>
    );
  }
}

export class Percentage extends Component {
  render(field) {
    const { label, input } = this.props
    return (
      <div className='percentage half right'>
        <label className='required'>{label}</label>
        <input {...input} type='number'/>
      </div>
    );
  }
}

export const Timeline = ({fields, label}) => (
  <ul className='timeline'>
    {fields.map((item, index) =>
      <li key={index} className='addItem'>
        <Field label={label[0]} name={`${item}.title`} type="text" component={ShortField} className='half left' />
        <Field label={label[1]} name={`${item}.where`} type="text" component={ShortField} className='half right' />
        <Field label={label[2]} name={`${item}.timefrom`} type="text" component={ShortField} className='half left' />
        <Field label={label[3]} name={`${item}.timeto`} type="text" component={ShortField} className='half right' />
        {/* <button
          type="button"
          title="Remove item"
        onClick={() => fields.remove(index)}/> */}
      </li>
    )}
    <li>
      <button type="button"  onClick={() => fields.push({})}>
        <span className='floatingBtn material-icons'>add</span>
        <span className='btnLabel'>Add one</span>
      </button>
    </li>
  </ul>
)

export const MultiField = ({fields, label}) => (
  <ul className='timeline'>
    {fields.map((item, index) =>
      <li key={index}>
        <Field label={label} name={item} type="text" component={ShortField} />
      </li>
    )}
    <li>
      <button type="button"  onClick={() => fields.push()}>
        <span className='floatingBtn material-icons'>add</span>
        <span className='btnLabel'>Add one </span>
      </button>
    </li>
  </ul>
)

export const MultiFieldLong = ({fields, label}) => (
  <ul className='timeline'>
    {fields.map((item, index) =>
      <li key={index}>
        <Field label={label} name={item} type="text" component={LongField} />
      </li>
    )}
    <li>
      <button type="button"  onClick={() => fields.push()}>
        <span className='floatingBtn material-icons'>add</span>
        <span className='btnLabel'>Add paragraph</span>
      </button>
    </li>
  </ul>
)

export const ProgressBar = ({fields, label}) => (
  <ul className='progressbar'>
    {fields.map((item, index) =>
      <li key={index} className='addItem'>
        <Field label={label[0]} name={`${item}.title`} type="text" className='half left' component={ShortField} />
        <Field label={label[1]} name={`${item}.rating`} type="text" className='half right' component={Percentage} />
        {/* <button type="button" title="Remove item" onClick={() => fields.remove(index)}/> */}
      </li>
    )}
    <li>
      <button type="button"  onClick={() => fields.push({})}>
        <span className='floatingBtn material-icons'>add</span>
        <span className='btnLabel'>Add one</span>
      </button>
    </li>
  </ul>
);

export const Tooltip = ({fields, label}) => (
  <div className='addItem'>
    <h3>Tooltip</h3>
    <Field label='Title' name={`tooltips.${fields.name}.title`} type="text" component={ShortField} />
    <Field label='Description' name={`tooltips.${fields.name}.description`} type="text" component={LongField} />
  </div>
);
