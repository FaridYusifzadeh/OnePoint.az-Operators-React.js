import styled from "styled-components";

export const ButtonContainer = styled.button`
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 2px solid rgb(250, 200, 25);
  background: rgb(250, 200, 25);
  color: white;
  width: auto;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-family: Cab;
  min-width: 150px;
  text-transform: uppercase;
       margin: 14px 0;
  &:hover {
    background: rgb(230, 180, 25);
    border: 2px solid rgb(230, 180, 25);
  }
  &:focus {
    outline: none;
  }
`;
