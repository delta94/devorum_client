import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Form, SubmitButton, RouterLink} from '../../constance/styled/form_styled'
import TextFieldGroup from '../common/TextFieldGroup'

export default ({ onChange, onSubmit, errors }) => {
  return (<Wrapper>
    <Form onSubmit={onSubmit} >
      <h3 style={{ textAlign: 'center' }}>Create new account</h3>
      <TextFieldGroup
        placeholder='Your fullname'
        name='name'
        label="Full name"
        error={errors.name}
        onChange={onChange}
      />
      <TextFieldGroup
        placeholder='Enter your own Email'
        name='email'
        label="Email"
        info="This site use Gravatar so you should use Gravatar email to use you avatar!"
        error={errors.email || errors.message}
        onChange={onChange}
      />
      <TextFieldGroup
        placeholder='Create your password'
        type="password"
        name='password'
        label="Create Password"
        error={errors.password}
        onChange={onChange}
      />
      <TextFieldGroup
        placeholder='Re-enter your password'
        type="password"
        name='password2'
        label="Confirm password"
        error={errors.password2}
        onChange={onChange}
      />
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