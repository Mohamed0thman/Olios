import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Static = css`
  &,
  &::before,
  &::after {
    width: 2rem;
    height: 3px;
    background-color: #0023ff;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.6rem;
  }
  &::after {
    top: 0.6rem;
  }
`;

const IconActive = css`
  background-color: transparent;

  &::before {
    background-color: #0023ff;

    transform: rotate(135deg);
    top: 0;
  }
  &::after {
    background-color: #0023ff;

    transform: rotate(-135deg);
    top: 0;
  }

  
`;

const BackgroundActive = css`
  width: 25rem;
  height: 100%;
  right: 0;
  top: 0;
  border-radius: 0;

  @media (max-width: 575.98px) {
    right: 0;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const SetIconActive = (props) => {
  console.log(props);
  if (props.iconState === true) {
    return IconActive;
  }
  return Static;
};

const SetBackgroundActive = (props) => {
  console.log(props);
  if (props.hiddenState === true) {
    return BackgroundActive;
  }
};

export const Icon = styled.span`
  position: relative;
  margin-top: 3rem;
  margin-left: 2rem;

  ${SetIconActive}
`;

export const RightMenuContainer = styled.div``;

export const CirclButton = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 1rem 1rem 5rem rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  position: fixed;
  right: 40px;
  top: 30px;
  z-index: 10000;

  @media (max-width: 575.98px) {
    right: 30px;
  }

  cursor: pointer;

  &:hover ${Icon}::before {
    top: -0.8rem;
  }

  &:hover ${Icon}::after {
    top: 0.8rem;
  }

  &:hover ${IconActive}::after, &:hover ${IconActive}::before {
    top: 0;
  }
`;

export const BackgroundContainer = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #ffffff;
  border-radius: 50%;
  position: fixed;
  right: 40px;
  top: 30px;
  z-index: 20;
  overflow: hidden;
  z-index: 5000;

  @media (max-width: 575.98px) {
    right: 30px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  transition: all 0.2s;

  ${SetBackgroundActive}
`;

export const ListContainer = styled.div`
  list-style: none;
  color: #d8d8d8;
  font-weight: 300;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  margin-top: 3rem;
  color: #d8d8d8;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    color: #0023ff;
    font-weight: 600;
  }

  &:hover {
    color: #0023ff;
    font-weight: 600;
  }
`;
export const NameContainer = styled.span`
  font-size: 1.6rem;
  margin-right: 1rem;
`;
export const IconContainer = styled.span`
  font-size: 3.5rem;
`;
