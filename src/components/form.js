import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';

const required = value => (value ? undefined : 'Required');
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export class ShortField extends Component {
  render(field) {
    const { label, input } = this.props
    return (
      <div className='shortField'>
        <label>{label}</label>
        <input {...input} type='text'/>
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
      <div className='percentage '>
        <label className='required'>{label}</label>
        <input {...input} type='number'/>
      </div>
    );
  }
}

export const Timeline = ({fields, label}) => (
  <ul className='timeline'>
    {fields.map((item, index) =>
      <li key={index}>
        <h4>{fields.name} #{index + 1}</h4>
        <Field label={label[0]} name={`${fields.name}${item}.title`} type="text" component={ShortField} />
        <Field label={label[1]} name={`${fields.name}${item}.where`} type="text" component={ShortField} />
        <Field label={label[2]} name={`${fields.name}${item}.timefrom`} type="text" component={ShortField} />
        <Field label={label[3]} name={`${fields.name}${item}.timeto`} type="text" component={ShortField} />
        <button
          type="button"
          title="Remove item"
          onClick={() => fields.remove(index)}/>
      </li>
    )}
    <li>
      <button type="button" onClick={() => fields.push({})}>Add one</button>
    </li>
  </ul>
)

export const MultiField = ({fields, label}) => (
  <ul className='timeline'>
    {fields.map((item, index) =>
      <li key={index}>
        <Field label={label} name={`${fields.name}${item}`} type="text" component={ShortField} />
      </li>
    )}
    <li>
      <button type="button" onClick={() => fields.push({})}>Add one</button>
    </li>
  </ul>
)

export const ProgressBar = ({fields, label}) => (
  <ul className='progressbar'>
    {fields.map((item, index) =>
      <li key={index}>
        <h4>{fields.name} #{index + 1}</h4>
        <Field label={label[0]} name={`${fields.name}${item}.title`} type="text" component={ShortField} />
        <Field label={label[1]} name={`${fields.name}${item}.rating`} type="text" component={Percentage} />
        <button type="button" title="Remove item" onClick={() => fields.remove(index)}/>
      </li>
    )}
    <li>
      <button type="button" onClick={() => fields.push({})}>Add one</button>
    </li>
  </ul>
);

export const Tooltip = ({fields, label}) => (
  <ul className='tooltip'>
    {fields.map((item, index) =>
      <li key={index}>
        <h4>{fields.name} #{index + 1}</h4>
        <Field label={label[0]} name={ fields.name + item + label[0]} component={DropdownList} data={[ 'Experience', 'Education', 'Skills', 'Expertise', 'Personality', 'Passions' ]} valueField="value"/>
        <Field label={label[1]} name={ fields.name + item + label[1]} type="text" component={ShortField} />
        <Field label={label[2]} name={ fields.name + item + label[2]} type="text" component={ShortField} />
        <button type="button" title="Remove item" onClick={() => fields.remove(index)}/>
      </li>
    )}
    <li>
      <button type="button" onClick={() => fields.push({})}>Add one</button>
    </li>
  </ul>
);
