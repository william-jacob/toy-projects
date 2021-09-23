import React, { useState } from 'react';

import styled, { css, keyframes } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const slideUp = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0px);
  }
  `;

const InputForm = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 130px;
  background: #f8f9fa;
  border-radius: 15px;
  border: 1px solid #e9ecef;

  animation: ${slideUp} 0.25s ease-out;
  animation-fill-mode: forwards;
`;
const Input = styled.input`
  position: absolute;
  top: 30px;
  left: 25px;
  width: 80%;
  padding: 12px;
  outline: none;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  font-size: 18px;
`;
const CircleAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;
  width: 70px;
  height: 70px;
  color: white;
  font-size: 60px;
  outline: none;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  cursor: pointer;

  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  transition: 0.125s all ease-in;
  ${({add}) =>
    add &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
  `}
  
`;

const ToDoCreate = () => {
  const [add, setAdd] = useState(false);

  const onToggleAddBtn = () => {
    setAdd(() => !add);
  }

  

  return(
    <>
      {add &&
      <InputForm>
        <Input autoFocus placeholder="할 일을 입력후, Enter를 눌러주세요."></Input>
      </InputForm>}
      <CircleAddBtn onClick={onToggleAddBtn} add={add}><MdAdd /></CircleAddBtn>
    </>
  )
}

export default ToDoCreate;




