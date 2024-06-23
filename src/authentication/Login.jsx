import styled from "styled-components";
import { useForm } from "react-hook-form";
import FormLabel from "../ui/FormLabel.jsx";
import FormInput from "../ui/FormInput.jsx";
import FormError from "../ui/FormError.jsx";

import useAuthenticateLogin from "./useAuthLogin.js";
import { FormHeading } from "../ui/FormHeading.jsx";
import FormContainer from "../ui/FormContainer.jsx";
import { NavLink } from "react-router-dom";

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

const Link = styled(NavLink)`
  &:link,
  &:visited {
    display: block;
    text-decoration: none;
    letter-spacing: 0.1rem;
    font-weight: 700;
    color: var(--color-medium-green);
  }

  &:hover {
    text-decoration: underline;
    color: var(--color-dark-green);
  }
`;

function Login() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const { mutate: mutateLogin, isPending } = useAuthenticateLogin();

  async function submitLoginForm(formData) {
    const { email, password } = formData;

    mutateLogin({ email, password });
  }

  function formError(err) {
    console.log(err);
  }

  if (isPending) console.log("is logging");
  return (
    <FormContainer>
      <FormHeading $fontSize="3rem">Log in to Natours</FormHeading>
      <StyledForm
        noValidate
        onSubmit={handleSubmit(submitLoginForm, formError)}
      >
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
          <FormLabel>Password</FormLabel>
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

        <Link to="/signup">{"Don't have natours account?"}</Link>
        <FormBtn>Login</FormBtn>
      </StyledForm>
    </FormContainer>
  );
}

export default Login;
