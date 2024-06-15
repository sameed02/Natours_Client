import styled from "styled-components";
import avatar from "../assets/img/avatar.jpg";

import FormContainer from "../ui/FormContainer.jsx";
import { FormHeading } from "../ui/FormHeading.jsx";
import FormLabel from "../ui/FormLabel.jsx";
import FormInput from "../ui/FormInput.jsx";
import { useForm } from "react-hook-form";
import FormError from "../ui/FormError.jsx";
import { uploadImage } from "../services/apiUser.js";

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

const FileInput = styled.input`
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const UploadLabel = styled.label`
  line-height: 1.6;
  font-weight: 300;
  font-size: 1.6rem;
  margin: 0;
  color: #55c57a;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-medium-green);
  }
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
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  async function updateUser(userData) {
    const { username, email, image } = userData;
    const imgUrl = await uploadImage(image[0].name, image[0]);

    console.log(imgUrl);
  }

  function formError(err) {
    console.log(err);
  }

  return (
    <FormContainer
      $height="100vh"
      $margin="0 auto"
      $maxWidth={`100vw`}
      $boxShadow="none"
    >
      <FormHeading $fontSize="3rem">Your Account Settings</FormHeading>
      <StyledForm noValidate onSubmit={handleSubmit(updateUser, formError)}>
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
          <Img src={avatar} />
          <FileInput
            type="file"
            accept="image/*"
            id="file-upload"
            {...register("image")}
          />
          <UploadLabel htmlFor="file-upload">Choose new photo</UploadLabel>

          <FormBtn>Save Settings</FormBtn>
        </UploadPhoto>
      </StyledForm>

      <Line>&nbsp;</Line>
      <FormHeading $fontSize="3rem">Password Change</FormHeading>
      <StyledForm noValidate>
        <FormLabel>Current password</FormLabel>
        <FormInput
          $width="60rem"
          type="password"
          placeholder="• • • • • • • •"
        />
        <FormLabel>Confirm password</FormLabel>
        <FormInput
          $width="60rem"
          type="password"
          placeholder="• • • • • • • •"
        />
        <FormLabel>New password</FormLabel>
        <FormInput
          $width="60rem"
          type="password"
          placeholder="• • • • • • • •"
        />

        <PassBtn>
          <FormBtn>Save Password</FormBtn>
        </PassBtn>
      </StyledForm>
    </FormContainer>
  );
}

export default Settings;
