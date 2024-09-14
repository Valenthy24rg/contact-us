import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const EditForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailSelect, setEmailSelect] = useState(true);
  const [phoneSelect, setPhoneSelect] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const {id} = useParams()

  const update = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await axios.put(URI+id, {
      name: name,
      email: email,
      phone: phone,
      email_Select: emailSelect,
      phone_Select: phoneSelect,
      message: message
    })
    navigate('/')
  }

  useEffect(() => {
    getFormById()
  }, []);

  const getFormById = async () => {
   const res = await axios.get(URI+id)
   setName(res.data.name)
   setEmail(res.data.email)
   setPhone(res.data.phone)
   setEmailSelect(res.data.emailSelect)
   setPhoneSelect(res.data.phoneSelect)
   setMessage(res.data.message)
  }
  
  return (
    <FormSection onSubmit={update}>
      <Title>Edit Message</Title>
        <InputContainer>
          <Input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}>
          </Input>

          <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}>
          </Input>

          <Input
          value={phone}
          type="number"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}>
          </Input>

        </InputContainer>
          <Option>Preferred contact method of communication</Option>
        <RadioButton>

          <FormControl>
          <RadioButtonInput
            value="email_select"
            type="radio"
            name="contactMethod"
            placeholder="Email"
            checked={emailSelect}
            onChange={(e) => setEmailSelect(e.target.checked)}
            >
          </RadioButtonInput>
          <Label htmlFor="email_select">Email</Label>
          </FormControl>
         
          <FormControl>
          <RadioButtonInput
            value="phone_select"
            type="radio"
            name="contactMethod"
            placeholder="Email"
            checked={phoneSelect}
            onChange={(e) => setPhoneSelect(e.target.checked)}
            >
          </RadioButtonInput>
          <Label htmlFor="phone_select">Phone</Label>
          </FormControl>

        </RadioButton>
        <InputContainer>
          <TextArea
          value={message}
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

export default EditForm