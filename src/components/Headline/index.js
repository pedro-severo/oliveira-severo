import React from "react";
import { HeadlineWrapper, Title, Subtitle } from "./styled";

export const Headline = (props) => {
    return <HeadlineWrapper>
        <Title titleSize={props.titleSize}>{props.title}</Title>
        <Subtitle 
            subtitleSize={props.subtitleSize}
            bold={props.bold === true ? "bold" : "default"}
        >
            {props.subtitle}
        </Subtitle>
    </HeadlineWrapper>
};

export default Headline;