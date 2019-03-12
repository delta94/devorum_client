import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Error, Form, Input, SubmitButton, RouterLink} from '../../constance/styled/form_styled'

export default ({ onChange, onSubmit, errors }) => {
  return (<Wrapper>
    <Form onSubmit={onSubmit} >
      <h3>Create new account</h3>
      <Input
        placeholder='Your Full Name'
        name='name'
        onChange={onChange} />
      { errors.name ? <Error>{errors.name}</Error> : null }
      <Input
        placeholder='Example@email.com'
        name='email'
        onChange={onChange} />
      { errors.email ? <Error>{errors.email}</Error> : null }
      { errors.message ? <Error>{errors.message}</Error> : null }
      <Input
        type='password'
        name='password'
        placeholder='Create your password'
        onChange={onChange} />
      { errors.password ? <Error>{errors.password}</Error> : null }
      <Input
        type='password'
        name='password2'
        placeholder='Re-enter your password'
        onChange={onChange} />
      { errors.password2 ? <Error>{errors.password2}</Error> : null }
      <Link
        style={RouterLink}
        to='/'>
        Have an account?</Link>
      <SubmitButton
        type='submit'
        value='Sign Up' />
    </Form>
  </Wrapper>)
}