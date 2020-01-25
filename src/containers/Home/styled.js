import styled from "styled-components";

const img = {
    background: require("../../assets/background.jpg")
};

export const FirstFold = styled.div `
    background-image: url(${img.background});
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HeadlineWrapper = styled.div `
    width: 40vw;
    margin: 0 0 35vh 10vw; 
`

export const HomeWrapper = styled.div `

`;