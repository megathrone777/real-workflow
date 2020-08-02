import React from "react";
import styled from "styled-components";

const Registration = () => {
  return (
    <StyledWrapper>
      <StyledForm method="POST" action="#">
        <StyledInput type="text" placeholder="Имя" />
        <StyledInput type="email" placeholder="E-mail*" disabled />
        <StyledInput type="password" placeholder="Пароль*" />
        <StyledButton type="submit">Зарегистрироваться</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledForm = styled.form`
  width: 400px;
  margin: 200px auto 0;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button``;

export default Registration;
