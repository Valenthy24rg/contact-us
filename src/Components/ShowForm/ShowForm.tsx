import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from './ShowFormStyled';
import {
  Button,
  Container,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTr
} from "./ShowFormStyled";

export interface FormProperties {
  id: number;
  name: string;
  email: string;
  phone: number;
  email_select: boolean;
  phone_select: boolean;
  message: string;
}

const URI = 'http://localhost:8000/forms/';

const ShowForm = () => {
  const [forms, setForm] = useState<FormProperties[]>([])

  useEffect(() => {
    getForms()
  },[])

  const getForms = async () => {
    const res = await axios.get(URI)
    setForm(res.data)
  };

  const deleteForm = async (id: number) => {
    axios.delete(`${URI}${id}`)
    getForms()
  };
  
  return(
    <Container>
      <Link to='/create'><i className="fa-solid fa-plus" style={{color: '#fff'}}></i></Link>
      <StyledTable>
      <StyledThead>
        <StyledTr>
          <StyledTh>Name</StyledTh>
          <StyledTh>Email</StyledTh>
          <StyledTh>Phone</StyledTh>
          <StyledTh>Email Select</StyledTh>
          <StyledTh>Phone Select</StyledTh>
          <StyledTh>Message</StyledTh>
          <StyledTh>Actions</StyledTh>
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {forms.map((form) => (
           <StyledTr key={form.id}>
            <StyledTd>{form.name}</StyledTd>
            <StyledTd>{form.email}</StyledTd>
            <StyledTd>{form.phone}</StyledTd>
            <StyledTd>{form.email_select}</StyledTd>
            <StyledTd>{form.phone_select}</StyledTd>
            <StyledTd>{form.message}</StyledTd>
            <StyledTd>
              <Icon>
              <Link to={`/edit/${form.id}`}><i className="fa-solid fa-pen-to-square" style={{color: '#fff'}}></i></Link>
              <Button onClick={() => deleteForm(form.id)} ><i className="fa-solid fa-trash" style={{color: '#fff'}}></i></Button>
              </Icon>
              </StyledTd>
           </StyledTr>
        ))}
        <StyledTr>
        </StyledTr>
      </StyledTbody>
    </StyledTable>
    </Container>
  )
  
}

export default ShowForm;