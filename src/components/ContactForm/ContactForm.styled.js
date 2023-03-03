import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  margin-left: 20px;
  width: 30%;
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FormikField)`
  display: block;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 1.2rem;
  color: red;
`;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 2px auto;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.5em 1em;
  color: #ffffff;
  background-color: #9555af;
  width: 50%;

  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  &:hover,
  &:focus {
    color: #9555af;
    border-color: currentColor;
    background-color: white;
  }
`;
