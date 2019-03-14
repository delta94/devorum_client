import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  opacity: .8;
  background: url('https://html.crumina.net/html-olympus/img/landing-users.png');
`

const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3f51b5;
  position: absolute;
  top: 0;
  left: 0;
  opacity: .8;
`

export default ({ maskColor }) => (<>
  <Backdrop />
  <Mask />
</>)
