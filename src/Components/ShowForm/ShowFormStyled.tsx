import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledThead = styled.thead`
  background-color: #221f50;
  color: white;
`;

export const StyledTh = styled.th`
  padding: 12px 15px;
`;

export const StyledTbody = styled.tbody`

`;

export const StyledTd = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
`;

export const StyledTr = styled.tr`

`;

export const Button = styled.button`
background: none;
outline: none;
border: none;
cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const PlusLink = styled.div`
display: flex;

`