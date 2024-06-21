import styled from "styled-components";
import FormError from "../FormError.jsx";
import { FormHeading } from "../FormHeading.jsx";
import FormInput from "../FormInput.jsx";
import FormLabel from "../FormLabel.jsx";
import { useForm } from "react-hook-form";
import { useAuthProvider } from "../../context/authContext.jsx";
import { useUpdateUser } from "../../pages/useUpdateUser.js";
import { toast } from "react-toastify";

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

function UpdateUserForm() {
  const { user } = useAuthProvider();
  const { mutate: mutateUserData, isPending } = useUpdateUser();

  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "",
      email: "",
      image: null,
    },
  });
  const { errors } = formState;

  async function updateUserDetails(userData) {
    let { username, email, image } = userData;

    try {
      if (!username && !email && image === null) {
        toast.error("Please choose atleast one field to update!");
        throw new Error("Please choose atleast one field to update!");
      }

      if (!username) username = user.name;
      if (!email) email = user.email;

      if (image === null) {
        console.log("image doesnt exist");
        mutateUserData(
          {
            username,
            email,
          },
          { onSettled: () => reset() }
        );
      }

      if (image !== null) {
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
    } catch (err) {
      console.error(err);
    }
  }

  function formError(err) {
    console.log(err);
  }

  if (isPending) console.log("updating user....");

  return (
    <>
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
          disabled={isPending}
        />
        {errors?.username?.message && (
          <FormError>{errors.username.message}</FormError>
        )}

        <FormLabel>Email</FormLabel>
        <FormInput
          $width="60rem"
          type="email"
          placeholder="your@example.com"
          disabled={isPending}
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
    </>
  );
}

export default UpdateUserForm;
