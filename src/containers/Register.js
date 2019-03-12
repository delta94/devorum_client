import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Dispatch Functionals
import { registerDispatch } from '../actions/authAction'

// UI Components
import SignUpForm from '../components/Forms/SignUpForm'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      const nextState = {
        ...this.state,
        errors: nextProps.errors
      }
      this.setState(nextState)
      console.clear()
    }
  }

  handleFormChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    const { registerDispatch, history } = this.props
    const newUser = { ...this.state }
    delete newUser.errors

    registerDispatch(newUser, history)
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      state: { errors }
    } = this

    return <SignUpForm
      errors={errors}
      onChange={handleFormChange}
      onSubmit={handleFormSubmit} />
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

const mapDispatchToProps = {
  registerDispatch
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
)
