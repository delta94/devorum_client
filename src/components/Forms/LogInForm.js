import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Form, Input, SubmitButton, RouterLink } from '../../constance/styled/form_styled'

export default ({ onChange, onSubmit }) => {
  return (<Wrapper>
    <Form onSubmit={onSubmit} >
      <h3>Log In</h3>
      <Input
        placeholder='Something@email.xyz'
        name='email'
        onChange={onChange} />
      <Input
        type='password'
        name='password'
        placeholder='Password'
        onChange={onChange} />
      <Link
        style={RouterLink}
        to='/register'>
        Create a new account</Link>
      <SubmitButton
        type='submit'
        value='Log In' />
    </Form>
  </Wrapper>)
}
