import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundDefault};
    `}
    `;

export const Content = styled.View`
    height: 70%;
`;

export const Footer = styled.View`
    ${({ theme }) => css`
    height: 30%;
    background-color: ${theme.colors.textButton};`}
`;