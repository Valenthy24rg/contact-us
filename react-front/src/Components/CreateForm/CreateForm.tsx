import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormSection,
  Title,
  Input,
  InputContainer,
  RadioButtonInput,
  Label,
  Option,
  RadioButton,
  FormControl,
  TextArea,
  Button,
 } from '../FormsStyled';

const URI = 'http://localhost:8000/forms/';

const CreateForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [methodSelect, setMethodSelect] = useState('email_select');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const store = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await axios.post(URI, {
      name: name,
      email: email,
      phone: phone,
      email_select: methodSelect === 'email_select',
      phone_select: methodSelect === 'phone_select',
      message: message
    })
    navigate('/')

  }

  return (
      <FormSection onSubmit={store}>
      <Title>Send us a Message</Title>
        <InputContainer>
          <Input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}>
          </Input>

          <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}>
          </Input>

          <Input
          type="number"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}>
          </Input>

        </InputContainer>
          <Option>Preferred contact method of communication</Option>
        <RadioButton>

          <FormControl>
          <RadioButtonInput
            value={'email_select'}
            type="radio"
            name="contactMethod"
            checked={methodSelect === 'email_select'}
            onClick={() => setMethodSelect('email_select')}
            >
          </RadioButtonInput>
          <Label htmlFor="email_select">Email</Label>
          </FormControl>
         
          <FormControl>
          <RadioButtonInput
            value={'phone_select'}
            type="radio"
            name="contactMethod"
            checked={methodSelect === 'phone_select'}
            onClick={() => setMethodSelect('phone_select')}
            >
          </RadioButtonInput>
          <Label htmlFor="phone_select">Phone</Label>
          </FormControl>

        </RadioButton>
        <InputContainer>
          <TextArea
          name="message"
          rows={5}
          cols={30}
          id="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          >
          </TextArea>
        </InputContainer>
        <Button type="submit">Submit</Button>
      </FormSection>
  )
}

export default CreateForm;