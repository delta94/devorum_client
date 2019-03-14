import React, { Component } from 'react'
import DashBoardUI from '../components/Dashboard/Dashboard'

// The HOF Actions help dispatch to reducers
import { getCurrentProfile } from '../actions/profileAction'

// Help connect component with Redux Store to use Application State
import { connect } from 'react-redux'

class Dashboard extends Component {
  componentDidMount() {
    const { getCurrentProfile } = this.props
    getCurrentProfile()
  }

  render() {
    const { redux } = this.props
    return <DashBoardUI redux={redux} />
  }
}

const mapDispatchToProps = { getCurrentProfile }

const mapStateToProps = ({ auth, profile }) => ({ redux: { auth, profile } })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)