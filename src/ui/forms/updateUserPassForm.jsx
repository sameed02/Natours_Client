import { useForm } from "react-hook-form";
import { useUpdatePassword } from "../../authentication/useUpdatePassword.js";
import { FormHeading } from "../FormHeading.jsx";
import FormLabel from "../FormLabel.jsx";
import FormInput from "../FormInput.jsx";
import styled from "styled-components";
import FormError from "../FormError.jsx";

const StyledForm = styled.form`
  & :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const PassBtn = styled.div`
  margin-top: 2rem;
  margin-left: auto;
`;

const FormBtn = styled.button`
  margin-left: auto;
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

function UpdateUserPassForm() {
  const { mutate: mutatePassword, isPending } = useUpdatePassword();

  const { register, formState, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
  });
  const { errors } = formState;

  async function updateUserPassword(data) {
    const { password, newPassword, newPasswordConfirm, ...other } = data;
    console.log(other);
    mutatePassword(
      { password, newPassword, newPasswordConfirm },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  function formError(err) {
    console.log(err);
  }

  if (isPending) console.log("updating user....");

  return (
    <>
      <FormHeading $fontSize="3rem">Password Change</FormHeading>
      <StyledForm
        noValidate
        onSubmit={handleSubmit(updateUserPassword, formError)}
      >
        <FormLabel>Current password</FormLabel>
        <FormInput
          $width="60rem"
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

        <FormLabel>New password</FormLabel>
        <FormInput
          $width="60rem"
          type="password"
          placeholder="• • • • • • • •"
          {...register("newPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters ",
            },
          })}
        />
        {errors?.newPassword?.message && (
          <FormError>{errors.newPassword.message}</FormError>
        )}

        <FormLabel>Confirm password</FormLabel>
        <FormInput
          $width="60rem"
          type="password"
          placeholder="• • • • • • • •"
          {...register("newPasswordConfirm", {
            required: "This field is required",
            validate: (value) => {
              return (
                value === getValues().newPassword || "Passwords need to match"
              );
            },
          })}
        />
        {errors?.newPasswordConfirm?.message && (
          <FormError>{errors.newPasswordConfirm.message}</FormError>
        )}

        <PassBtn>
          <FormBtn>Save Password</FormBtn>
        </PassBtn>
      </StyledForm>
    </>
  );
}

export default UpdateUserPassForm;
