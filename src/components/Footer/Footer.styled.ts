import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  border-top: 1px solid black;
  padding: 1.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  a,
  a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.colors.teal};

    &:hover {
      filter: brightness(80%);
    }
  }
`;
