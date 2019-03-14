import React from 'react'

import styled from 'styled-components'
import theme from '../../constance/Theme'

const Navbar = styled.nav`
  margin: 0;
  background-color: ${theme.COLOR.DARKBLUE};
  color: ${theme.TEXT.COLOR};
  display: flex;
  padding: 4px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: ${theme.BOX.SHADOW};
`

const Brand = styled.h2`
  text-transform: uppercase;
  font-size: 17px;
  color: white;
`

const Info = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

const Logout = styled.a`
  display: block;
  padding: 6px 12px;
  color: white;
  font-size: 12px;
  margin-left: 16px;
`

const Username = styled.p`
  color: white;
  font-size: 15px;
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
`

export default function({ brand, user, onLogout }) {
  let loginDetails = null

  if(user) {
    loginDetails = (<Info>
      <Avatar src={`https:${user.avatar}`} />
      <Username>{user.name}</Username>
      <Logout href='/' onClick={onLogout}>Log out</Logout>
    </Info>)
  }

  return (
    <Navbar>
      <Brand>{brand}</Brand>
      { loginDetails }
    </Navbar>
  )
}