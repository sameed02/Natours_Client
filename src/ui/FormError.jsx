import styled from "styled-components";

const StyledFormError = styled.div`
  font-size: 1.4rem;
  color: red;
  margin-top: -2rem;
`;

function FormError({ children }) {
  return <StyledFormError>{children}</StyledFormError>;
}

export default FormError;
