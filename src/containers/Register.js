import React, { Component } from 'react'
import SignUpForm from '../components/Forms/SignUpForm'
import { connect } from 'react-redux'

// Actions
import { registerDispatch } from '../actions/authAction'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.errors) {
      this.setState({ errors: nextProps.auth.errors })
    }
  }

  handleFormChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const { registerDispatch } = this.props
    const newUser = {...this.state}
    delete newUser.errors

    registerDispatch(newUser)
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
  auth: state.auth
})

export default connect(mapStateToProps, { registerDispatch })(Register)
