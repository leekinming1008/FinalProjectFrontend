import { ErrorMessage } from "formik";
import styled from "styled-components";

interface ErrorMessageContainerProps {
  name: string;
}

const StyledErrorMessage = styled.div`
  color: red;
  padding: 10px;
  margin-top: 5px;
`;

const ErrorMessageContainer = ({ name }: ErrorMessageContainerProps) => {
  return (
    <StyledErrorMessage>
      <ErrorMessage name={name} />
    </StyledErrorMessage>
  );
};

export default ErrorMessageContainer;
