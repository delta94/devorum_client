import styled from 'styled-components'

export const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, .8);
  margin-left: 4px;
`

export const InputDesc = styled.p`
  color: gray;
  font-size: 12px;
  display: block;
  width: 100%;
`

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
  font-size: 13px;
  padding: 8px 12px 10px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .12);
  outline: none;
  margin-top: 8px;
  box-sizing: border-box;
  width: 100%;
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
