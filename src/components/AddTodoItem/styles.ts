import styled from "@emotion/styled";
import { alpha01, dark02, gray01, white } from "../../styles/abstracts/variables";

export const StyledAddTodoItem = styled.form`
  display: flex;
  height: 64px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background: ${white};
  gap: 24px;
  box-shadow: 0 35px 50px -15px ${alpha01};
  width: 100%;
  background-color: ${({theme}) => theme === "light" ? white : dark02}
`;

export const AddTodoItemInput = styled.input`
  color: ${gray01};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.25px;
  width: 100%;
  background-color: transparent;
`;
