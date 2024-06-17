import styled from "styled-components";

import FormContainer from "../ui/FormContainer.jsx";
import { FormHeading } from "../ui/FormHeading.jsx";
import FormLabel from "../ui/FormLabel.jsx";
import FormInput from "../ui/FormInput.jsx";
import { useForm } from "react-hook-form";
import FormError from "../ui/FormError.jsx";
import { useUpdateUser } from "./useUpdateUser.js";
import { useAuthProvider } from "../context/authContext.jsx";
import { useUpdatePassword } from "../authentication/useUpdatePassword.js";

const StyledForm = styled.form`
  & :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const UploadPhoto = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
`;

const Img = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
`;

const FileInput = styled.input``;

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

const Line = styled.div`
  line-height: 1.6;
  font-weight: 300;
  color: #777;
  padding: 0;
  box-sizing: inherit;
  margin: 6rem 0;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

const PassBtn = styled.div`
  margin-top: 2rem;
  margin-left: auto;
`;

function Settings() {
  const { register, formState, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      username: "",
      email: "",
      image: null,
      password: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
  });
  const { errors } = formState;

  const { user } = useAuthProvider();
  const { mutate: mutateUserData, isPending } = useUpdateUser();
  const { mutate: mutatePassword, isPending: isUpdatingPassword } =
    useUpdatePassword();

  async function updateUserDetails(userData) {
    let { username, email, image } = userData;

    if (!username) username = user.name;
    if (!email) email = user.email;

    if (!image[0]) {
      console.log("image doesnt exist");
      mutateUserData(
        {
          username,
          email,
        },
        { onSettled: () => reset() }
      );
    }

    if (image[0]) {
      console.log("image exists");
      mutateUserData(
        {
          username,
          email,
          fileName: image[0].name,
          file: image[0],
        },
        { onSettled: () => reset() }
      );
    }
  }

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

  if (isPending || isUpdatingPassword) console.log("updating user....");

  return (
    <FormContainer
      $height="100vh"
      $margin="0 auto"
      $maxWidth={`100vw`}
      $boxShadow="none"
    >
      <FormHeading $fontSize="3rem">Your Account Settings</FormHeading>
      <StyledForm
        noValidate
        onSubmit={handleSubmit(updateUserDetails, formError)}
      >
        <FormLabel>Name</FormLabel>
        <FormInput
          $width="60rem"
          type="text"
          placeholder="username"
          {...register("username")}
        />
        {errors?.username?.message && (
          <FormError>{errors.username.message}</FormError>
        )}

        <FormLabel>Email</FormLabel>
        <FormInput
          $width="60rem"
          type="email"
          placeholder="your@example.com"
          {...register("email", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide valid email address",
            },
          })}
        />
        {errors?.email?.message && (
          <FormError>{errors.email.message}</FormError>
        )}

        <UploadPhoto>
          <Img src={user?.data?.doc?.photo} />
          <FileInput
            type="file"
            accept="image/*"
            id="file-upload"
            {...register("image")}
          />

          <FormBtn>Save Settings</FormBtn>
        </UploadPhoto>
      </StyledForm>

      {/* ---------- update password form  ---------- */}
      <Line>&nbsp;</Line>
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

        <PassBtn>
          <FormBtn>Save Password</FormBtn>
        </PassBtn>
      </StyledForm>
    </FormContainer>
  );
}

export default Settings;
