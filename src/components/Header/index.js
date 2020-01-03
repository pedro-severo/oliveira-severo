import React from "react";
import { HeaderWrapper } from "./styled";
import { Menu } from "../Menu";


export const Header = () => {
    return <HeaderWrapper>
        <FlexDiv>
        <h1>Logo</h1>
        <Menu />
        </FlexDiv>
    </HeaderWrapper>
};

export default Header;