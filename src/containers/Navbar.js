import React, { Component } from 'react'
import Nav from '../components/Layout/Navbar'
import { connect } from 'react-redux'
import { logoutDispatch } from '../actions/authAction'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
  handleLogout = (e) => {
    e.preventDefault()
    const { logoutDispatch, history } = this.props
    logoutDispatch(history)
  }

  render() {
    const {
      props: { auth: { isAuthenticated, user } },
      handleLogout
    } = this

    return <Nav
      brand='Devorum'
      user={isAuthenticated ? user : null}
      onLogout={handleLogout} />
  }
}

const mapDispatchToProps = { logoutDispatch }

const mapStateToProps = ({ auth }) => ({ auth })

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navbar)
)
