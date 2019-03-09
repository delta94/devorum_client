import styled from 'styled-components'

export const Wrapper = styled.div `
  background-color: white;
  position: absolute;
  padding: 4px 22px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  z-index: 200;
  min-width: 320px;
  transform: translate(-50%, -50%);
`

export const Input = styled.input `
  font-size: 14px;
  padding: 6px 10px 8px 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .12);
  outline: none;
  margin-top: 16px;
`

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 12px;
`

export const SubmitButton = styled.input `
  background-color: #d81b60;
  color: white;
  padding: 7px 10px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
`
export const Error = styled.div`
  color: tomato;
  font-size: 12px;
  margin: 8px 0;
`

export const RouterLink = {
  color: '#d81b60',
  fontWeight: '400',
  fontSize: '13px',
  margin: '16px 0'
}
