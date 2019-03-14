import React from 'react'

import { Dashboard } from '../../constance/styled/dashboard_styled'

import Loading from '../common/Loading/Loading'
import { setProfileLoading } from '../../actions/profileAction';

export default ({ redux }) => {
  const {
    auth: { user },
    profile: { profile, loading }
  } = redux

  // Waiting dashboard
  let DashboardContent = <Loading color='purple' />

  if(profile !== null || !loading) {
    DashboardContent = <h1>Welcome to your dashboard</h1>
  }

  return (
    <Dashboard>
      {DashboardContent}
    </Dashboard>
  )
}
