import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  & button {
    width: 100%;
    border-radius: 5px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #4d63ef;
`;

export const PersonalButton = styled.button`
  background: none;
  border: 1px solid white;
  margin-top: 10px;
`;
