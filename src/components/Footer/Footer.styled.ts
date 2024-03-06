import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  border-top: 1px solid black;
  padding: 2rem 10vmin;
  font-size: 1.5rem;
  a,
  a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.colors.teal};

    &:hover {
      filter: brightness(80%);
    }
  }
`;
