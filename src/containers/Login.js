import React, { Component } from 'react'
import LogInForm from '../components/Forms/LogInForm'
import { withRouter } from 'react-router-dom'
import isEmpty from '../validation/isEmpty'

import { connect } from 'react-redux'
import { loginDispatch } from '../actions/authAction'

import Backdrop from '../components/Layout/Backdrop'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentWillMount() {
    const { auth: { isAuthenticated }, history } = this.props
    if(isAuthenticated) history.push('/dashboard')
  }

  componentWillReceiveProps({ auth, errors }) {
    auth.isAuthenticated && this.props.history.push('/dashboard')
    errors && this.setState({ errors })
  }

  handleFormChange = ({ target }) => {
    this.setState(prevState => {
      if(isEmpty(prevState.errors)) {
        return { [target.name]: target.value }
      }
      return {
        [target.name]: target.value,
        errors: {}
      }
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const { loginDispatch } = this.props

    const loginInfo = { ...this.state }
    delete loginInfo.errors

    loginDispatch(loginInfo)
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      state: { errors }
    } = this

    return (<>
      <LogInForm
        errors={errors}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit} />
      <Backdrop />
    </>)
  }
}

const mapDispatchToProps = { loginDispatch }

const mapStateToProps = ({ auth, errors }) => ({ auth, errors })

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login)
)