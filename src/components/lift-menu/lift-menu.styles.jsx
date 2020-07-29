import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

export const LiftMenuContainer = styled.div`
  width: 8rem;
  min-height: 100vh;
  margin-right: 1rem;
`;

export const Menu = styled.div`
  background-color: #ffffff;
  width: 8rem;
  min-height: 100%;
  text-align: center;
  position: fixed;
  z-index: 1000;
  display: flex;
`;

export const MenuContainer = styled.div`
  padding: 1rem 2.5rem;
  margin-right: 0.5rem;
`;

export const LogoContainer = styled.div`
  width: 2rem;
  margin-top: 1rem;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 7rem;
  align-items: center;
`;

export const SideContainer = styled.div`
  box-shadow: 10px 0px 15px rgba($color: #000000, $alpha: 0.1);
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
