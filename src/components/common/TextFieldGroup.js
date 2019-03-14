import React from 'react'
import styled from 'styled-components'
import { Input, Label, Error, InputDesc } from '../../constance/styled/form_styled'

const Group = styled.div`
  margin: 8px 0;
`

// This just be a functional component to render Input UI Form
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => (<Group>
  { label ? <Label>{label}</Label> : null }
  <Input
    name={name}
    disabled={disabled || false }
    value={value}
    type={type || 'text'}
    placeholder={placeholder}
    onChange={onChange} />
  { info ? <InputDesc>{info}</InputDesc> : null }
  { error ? <Error>{error}</Error> : null }
</Group>)

export default TextFieldGroup
