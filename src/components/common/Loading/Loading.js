import React from 'react'
import './Loading.css'
import styled from 'styled-components'

// const mainColor = 'rgb(29, 68, 196)'

const Circle = styled.div`
  position: absolute;
  border: 4px solid ${props => props.color || 'rgb(29, 68, 196)'};
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`

export default ({ color }) => (
  <div className="lds-ripple">
    <Circle color={color}></Circle>
    <Circle color={color}></Circle>
  </div>
)