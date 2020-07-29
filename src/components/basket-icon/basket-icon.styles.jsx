import styled, { css } from "styled-components";

const OptionContainerStyles = css`
  display: block;
  font-size: 2.5rem;
  font-weight: 400;
  color: #d8d8d8;
  margin-top: 4rem;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: #0023ff;
  }
`;

export const BasketContainer = styled.div`
  cursor: pointer;
  position: relative;
`;

export const ItemCount = styled.span`
  width: 2rem;
  height: 2rem;
  color: white;
  background-color: #de5246;
  border-radius: 50%;
  position: absolute;
  left: -8px;
  bottom: 8px;
`;

export const OptionDiv = styled.span`
  ${OptionContainerStyles}
`;
