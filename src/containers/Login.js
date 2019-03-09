import React, { Component } from 'react'

import LogInForm from '../components/Forms/LogInForm'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  handleFormChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit
    } = this

    return <LogInForm
      onChange={handleFormChange}
      onSubmit={handleFormSubmit} />
  }
}