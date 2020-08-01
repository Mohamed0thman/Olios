import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 60vh;
  height: 60vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #ed8526;
`;
