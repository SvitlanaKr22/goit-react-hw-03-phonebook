import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 7px;
`;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 2px 10px;
  border: solid 1px transparent;
  border-radius: 4px;
  font-size: 16px;
  padding: 0.1em 0.2em;
  color: #ffffff;
  background-color: #6a666b;
  width: 10%;

  &:hover,
  &:focus {
    color: #6a666b;
    border-color: currentColor;
    background-color: white;
  }
`;
