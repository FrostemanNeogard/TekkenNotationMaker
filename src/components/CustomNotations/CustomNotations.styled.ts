import styled from "styled-components";

export const CustomNotations = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Heading = styled.p`
  width: 100%;
  margin: 0;
  font-size: 0.9rem;
`;

export const Item = styled.span`
  position: relative;
  display: inline-flex;
`;

export const Remove = styled.button`
  position: absolute;
  top: -0.4rem;
  right: -0.4rem;
  z-index: 1;
  width: 1.3rem;
  height: 1.3rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #d33;
  color: white;
  font-size: 0.9rem;
  line-height: 1;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  input,
  select,
  button {
    padding: 0.6rem;
    border: none;
    font-size: 1rem;
  }

  input {
    flex: 1;
    min-width: 0;
    user-select: text;
    -webkit-user-select: text;
  }

  button {
    background-color: #ffffffdd;
    color: black;

    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;
