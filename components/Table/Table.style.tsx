import styled from 'styled-components'





export const TableStyle = styled.table`
  
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
 td, th {
  border: 1px solid #ddd;
  padding: 8px;
}
tr:nth-child(even){background-color: #f2f2f2;}
 tr:hover {background-color: #ddd;cursor: pointer;}
 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #521e6a;
  color: white;
}
`