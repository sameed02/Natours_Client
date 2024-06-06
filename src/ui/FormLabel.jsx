import styled from "styled-components";

const FormRowLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem !important;
`;

function FormLabel({ children }) {
  return <FormRowLabel>{children}</FormRowLabel>;
}

export default FormLabel;
