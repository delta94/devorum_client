import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Backdrop from '../components/Layout/Backdrop'
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

  componentWillMount() {
    const { auth: { isAuthenticated }, history} = this.props
    if(isAuthenticated) history.push('/dashboard')
  }

  componentWillReceiveProps({ errors }) {
    errors && this.setState({ errors })
  }

  handleFormChange = ({ target }) => {
    this.setState(prevState => {
      if(prevState.errors) {
        return {
          [target.name]: target.value,
          errors: {}
        }
      }
      return { [target.name]: target.value }
    })
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

    return (<>
      <SignUpForm
        errors={errors}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit} />
      <Backdrop />
    </>)
  }
}

const mapDispatchToProps = { registerDispatch }
const mapStateToProps = ({ auth, errors }) => ({ auth, errors })

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
)