import styled from 'styled-components';

export const FormSection = styled.form`
  max-width: 350px;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
`
export const Title = styled.h2`
 font-weight: bold;
 margin-bottom: 20px;
 color: #000;
 font-size: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 20px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  outline: none;
  appearance: none;

  &::placeholder {
    color: #000000ac;
    font-weight: 600;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Label = styled.label`
  color: #000;
  margin: 5px;
  font-size: 13px;
`

export const RadioButton = styled.div`
  display: flex;
margin-left: -10px;
`

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-top: 4px;
`

export const Option = styled.p`
margin-bottom: 10px;
color: #000;
margin-top: 25px;
font-size: 14px;
`

export const RadioButtonInput = styled.input`
 border: 1px solid;
 border-radius: 1em;
 width: 1.2em;
 height: 1.2em;
 display: flex;
 &::after {
   content: "";
   position: absolute;
   display: none;
  }

  &:checked + &::after {
    display: block;
  }
`

export const TextArea = styled.textarea`
  width: 350px;
  resize: none;
  border-radius: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box; 
  padding: 10px;
  
  
  
  &::placeholder {
    color: #000000ac;
    font-weight: 600;
  }
  
  &:focus::placeholder {
    opacity: 0;
  }
`
export const Button = styled.button`
margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 100px;
  background-color: #FF007A;
  border: none;
  color: #fff;
`