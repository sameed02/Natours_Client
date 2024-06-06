import styled from "styled-components";
import { useForm } from "react-hook-form";
import FormLabel from "../ui/FormLabel.jsx";
import FormInput from "../ui/FormInput.jsx";
import FormError from "../ui/FormError.jsx";

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

const FormBtn = styled.button`
  font-size: 1.6rem;
  font-weight: 300;
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
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function submitLoginForm(formData) {
    const { email, password } = formData;
    console.log(email, password);
  }

  function onError(err) {
    console.log(err);
  }

  return (
    <LoginFormContainer>
      <FormHeading>Log in to Natours</FormHeading>
      <StyledForm noValidate onSubmit={handleSubmit(submitLoginForm, onError)}>
        <FormRow>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            placeholder="your@example.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide valid email address",
              },
            })}
          />
          {errors?.email?.message && (
            <FormError>{errors.email.message}</FormError>
          )}
        </FormRow>

        <FormRow>
          <FormLabel>Password (min 8 characters)</FormLabel>
          <FormInput
            type="password"
            placeholder="• • • • • • • •"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters ",
              },
            })}
          />
          {errors?.password?.message && (
            <FormError>{errors.password.message}</FormError>
          )}
        </FormRow>

        <FormBtn>Login</FormBtn>
      </StyledForm>
    </LoginFormContainer>
  );
}

export default Login;
