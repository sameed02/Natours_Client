import styled from "styled-components";

import FormContainer from "../ui/FormContainer.jsx";
import UpdateUserForm from "../ui/forms/updateUserForm.jsx";
import UpdateUserPassForm from "../ui/forms/updateUserPassForm.jsx";

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

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function Settings() {
  return (
    <Container>
      <FormContainer
        $height="100vh"
        $margin="0 auto"
        $maxWidth={`100vw`}
        $boxShadow="none"
      >
        <UpdateUserForm />
        <Line>&nbsp;</Line>
        <UpdateUserPassForm />
      </FormContainer>
    </Container>
  );
}

export default Settings;
