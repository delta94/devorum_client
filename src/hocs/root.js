import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../store'

import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
`

export default (props) => (
  <Provider store={ store }>
    <Router>
      <Wrapper>
        {props.children}
      </Wrapper>
    </Router>
  </Provider>
)
