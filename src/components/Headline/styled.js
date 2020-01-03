import styled from "styled-components";

export const HeadlineWrapper = styled.div `

`;

export const Title = styled.div `
    color: #fff;
    font-size: ${props => props.titleSize};
`;

export const Subtitle = styled.div `
    color: #fff;
    font-size: ${props => props.subtitleSize};
    font-weight: ${props => props.bold};
`;