import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Form, SubmitButton, RouterLink } from '../../constance/styled/form_styled'
import TextFieldGroup from '../common/TextFieldGroup'

export default ({ onChange, onSubmit, errors }) => {
  return (<Wrapper>
    <Form onSubmit={onSubmit}>
      <h3 style={{ textAlign: 'center' }}>Log In</h3>
      <TextFieldGroup
        placeholder='Something@email.xyz'
        name='email'
        label="Email"
        error={errors.email}
        onChange={onChange}
      />
      <TextFieldGroup
        label="Password"
        type='password'
        name='password'
        error={errors.password}
        placeholder='Enter your password'
        onChange={onChange}
      />
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
