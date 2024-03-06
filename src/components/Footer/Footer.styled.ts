import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  border-top: 1px solid black;
  padding: 2rem;
  font-size: 1.2rem;
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
