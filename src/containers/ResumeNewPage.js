import React, { Component } from 'react';
import { fetchUser, postResume } from '../actions';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'
import validate from './validate.js';

import ResumeNewPage_1 from './ResumeNewPage_1';
import ResumeNewPage_2 from './ResumeNewPage_2';
import ResumeNewPage_3 from './ResumeNewPage_3';

let informationErrors = {};

class ResumeNew extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }
  onSubmit = (values) => {
    console.log('submit')
    console.log(values);

    this.props.postResume(values, (response) => {
      console.log(response)
      this.props.history.push(`/resume/${response.data.name}`);
    });
  }
  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
      {page === 1 && <ResumeNewPage_1 onSubmit={this.nextPage}/>}
      {page === 2 && <ResumeNewPage_2 previousPage={this.previousPage} onSubmit={this.nextPage}/>}
      {page === 3 && <ResumeNewPage_3 previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
    </div>
    )
  }
}

ResumeNew.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default connect(null, { fetchUser, postResume }) (ResumeNew); //combine reduxForm and connect
