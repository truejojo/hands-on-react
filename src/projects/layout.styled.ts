import styled, { css } from "styled-components";

// kind of mixins
export const displayGrid = css`
  display: grid;
  gap: var(--gap, var(--spacer-1r));
`;

export const bgcShadow = css`
  background: #f5f5f5;
  box-shadow: 3px 5px 10px 2px #bbb;
`;

export const displayFlex = css`
  display: flex;
  gap: var(--gap, var(--spacer-1r));
`;

// kind of abstract class
const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  padding: 0.5em 1.25em;
  border: 0;
  cursor: pointer;
  transition: background ease .35s, color ease .35s; 

  &:hover,
  &:focus {
    background: var(--bg, var(--clr-neutral-800));
    color: var(--clr, var(--clr-accend-I));
  }
`;

// kind of classes
export const Container = styled.div`
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
`;

export const DefaultButton = styled(Button)`
  background: var(--clr-primary);
  color: var(--clr-neutral-100);
`;

export const SaveButton = styled(Button)`
  background: var(--clr-secondary-II);
  color: var(--clr-neutral-100);
`;

export const DangerButton = styled(Button)`
  background: var(--clr-secondary-I);
  color: var(--clr-neutral-100);
`;
