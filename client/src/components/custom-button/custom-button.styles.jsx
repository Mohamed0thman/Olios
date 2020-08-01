import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #0023ff;
  color: #ffff;
  border: 1px solid #0023ff;

  &:hover {
    background-color: white;
    color: #0023ff;
    border: 1px solid #0023ff;
  }
`;

const invertedButtonStyleds = css`
  border-radius: 25px;
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #0023ff;
  color: #ffff;
  border: 1px solid #0023ff;

  &:hover {
    background-color: white;
    color: #0023ff;
    border: 1px solid #0023ff;
  }

  }
`;

const googleSignInStyles = css`
  background-color: #de5246;
  border: 1px solid #de5246;
  color: white;
  &:hover {
    background-color: white;
    color: #de5246;
    border: 1px solid #de5246;
  }
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyleds : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  max-width: 250px;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 1rem 0;
  padding: 1.3rem 0;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:focus,
  &:active {
    outline: none;
  }

  ${getButtonStyles}
`;
