import styled from "styled-components";

const LoginFormContainer = styled.div`
  max-width: 55rem;
  margin: 10rem auto;
  background-color: var(--color-white);
  color: var(--color-grey-2);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  padding: 5rem 7rem;
  border-radius: 0.5rem;
`;

const FormHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #7dd56f, #28b487);
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  margin-bottom: 3.5rem !important;
`;

const StyledForm = styled.form`
  & :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const FormRow = styled.div``;

const FormRowLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem !important;
`;

const FormRowInput = styled.input`
  display: block;
  width: 100%;
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

const FormBtn = styled.button`
  font-size: 1.6rem;
  padding: 1.4rem 3rem;
  border-radius: 10rem;
  text-transform: uppercase;
  transition: all 0.4s;
  border: none;
  cursor: pointer;
  background-color: var(--color-medium-green);
  color: var(--color-grey-1);

  &:hover {
    background-color: var(--color-dark-green);
  }
`;

function Login() {
  return (
    <LoginFormContainer>
      <FormHeading>login to your account</FormHeading>
      <StyledForm>
        <FormRow>
          <FormRowLabel>Email Address</FormRowLabel>
          <FormRowInput placeholder="your@example.com"></FormRowInput>
        </FormRow>
        <FormRow>
          <FormRowLabel>Password</FormRowLabel>
          <FormRowInput placeholder="• • • • • • • •"></FormRowInput>
        </FormRow>
        <FormBtn>Login</FormBtn>
      </StyledForm>
    </LoginFormContainer>
  );
}

export default Login;
