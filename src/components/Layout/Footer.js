import React from 'react'
import styled from 'styled-components'
import theme from '../../constance/theme'

const Footer = styled.footer`
  background-color: ${theme.COLOR.DARKBLUE}
  color: white;
  padding: 18px;
  font-weight: 500;
  opacity: .6;
  font-size: 13px;
  text-align: center;
  box-sizing: border-box;
  width: 100vw;
`

export default ({ fixed }) => {
  const position = {position: 'absolute', bottom: '0'}

  return (<Footer style={ fixed ? position : null }>
    Coders.Tokyo &copy;{new Date().getFullYear()}
  </Footer>)
}