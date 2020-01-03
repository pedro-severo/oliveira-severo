import React from "react";
import { HeaderWrapper, FlexDivMenu, ImgLogo } from "./styled";
import { Menu } from "../Menu";

const img = {
    logo: require('../../assets/logo.png')
}

export const Header = () => {
    return <HeaderWrapper>
        <FlexDivMenu>
            <ImgLogo src={img.logo} alt="logo"/>
            <Menu />
        </FlexDivMenu>
        
    </HeaderWrapper>
};

export default Header;