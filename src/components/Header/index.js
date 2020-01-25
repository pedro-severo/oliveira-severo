import React, { useState } from "react";
import { HeaderWrapper, FlexDivMenu, ImgLogo } from "./styled";
import { Menu } from "../Menu";

const img = {
    logo: require('../../assets/logo.png')
};

export const Header = () => {
    const [firstLink, setFirstLink] = useState('Nos conte seu caso')
    const [secondLink, setSecondLink] = useState('Blog')
    const [thirdLink, setThirdLink] = useState('Contato')


    const onClickFirstLink = () => {
        setFirstLink('Home');
    };

    const onClickSecondLink = () => {
        setFirstLink('Home');
        setSecondLink('Nos conte seu caso');
    };

    const onClickThirdLink = () => {
        setFirstLink('Home');
        setSecondLink('Nos conte seu caso');
        setThirdLink('Blog');
    };


    return <HeaderWrapper>
        <FlexDivMenu>
            <ImgLogo src={img.logo} alt="logo"/>
            <Menu 
                onClickFirstLink={onClickFirstLink}
                onClickSecondLink={onClickSecondLink}
                onClickThirdLink={onClickThirdLink}
                firstLink={firstLink}
                secondLink={secondLink}
                thirdLink={thirdLink}
            />
        </FlexDivMenu>
        
    </HeaderWrapper>
};

export default Header;