import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 17px;
  }
  & button {
    width: 100%;
    border-radius: 5px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  & textarea,
  input {
    width: 100%;
    border: 1px solid white;
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
    color: White;
    margin-top: 25px;
    margin-bottom: 20px;
    &::placeholder {
      color: #a5a5a5;
    }
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
