import styled from "styled-components";

const FormInput = styled.input`
  display: block;
  width: ${(props) => props.$width || "40rem"};
  padding: 1.25rem 1.75rem;
  font-size: 1.5rem;
  font-weight: 100;
  background-color: #f2f2f2;
  border-radius: 0.4rem;
  border: none;
  color: var(--color-grey-3);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;

  &::placeholder {
    color: #888;
    font-style: italic;
  }
`;

export default FormInput;
