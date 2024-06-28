import { useForm } from "react-hook-form";
import useSignup from "./useSignup.js";
import styled from "styled-components";
import FormContainer from "../ui/FormContainer.jsx";
import { FormHeading } from "../ui/FormHeading.jsx";
import FormLabel from "../ui/FormLabel.jsx";
import FormInput from "../ui/FormInput.jsx";
import FormError from "../ui/FormError.jsx";
import { NavLink } from "react-router-dom";
import Loader from "../ui/SpinnerFull.jsx";

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

function Signup() {
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;

  const { mutate: mutateSignup, isPending } = useSignup();

  async function submitSignupForm(formData) {
    const { name, email, password, passwordConfirm } = formData;
    console.log(name, email, password, passwordConfirm);

    mutateSignup({ name, email, password, passwordConfirm });
  }

  function formError(err) {
    console.log(err);
  }

  if (isPending) return <Loader />;
  return (
    <FormContainer>
      <FormHeading $fontSize="3rem">Signup to Natours</FormHeading>
      <StyledForm
        noValidate
        onSubmit={handleSubmit(submitSignupForm, formError)}
      >
        <FormRow>
          <FormLabel>Name</FormLabel>
          <FormInput
            type="text"
            placeholder="john smith"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors?.name?.message && (
            <FormError>{errors.name.message}</FormError>
          )}
        </FormRow>

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

        <FormRow>
          <FormLabel>Confirm password</FormLabel>
          <FormInput
            type="password"
            placeholder="• • • • • • • •"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) => {
                return (
                  value === getValues().password || "Passwords need to match"
                );
              },
            })}
          />
          {errors?.passwordConfirm?.message && (
            <FormError>{errors.passwordConfirm.message}</FormError>
          )}
        </FormRow>
        <Link to="/login">{"already have natours account?"}</Link>
        <FormBtn>Signup</FormBtn>
      </StyledForm>
    </FormContainer>
  );
}

export default Signup;
