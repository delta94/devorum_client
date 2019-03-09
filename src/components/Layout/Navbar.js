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

export default function({ brand }) {
  return (
    <Navbar>
      <Brand>{brand}</Brand>
    </Navbar>
  )
}
