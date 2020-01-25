import React from "react";
import { MenuWrapper } from "./styled";

export const Menu = props => {

    return <MenuWrapper>
        <div onClick={props.onClickFirstLink}>
            <p>{props.firstLink}</p>
        </div>
        <div onClick={props.onClickSecondLink}>
            <p>{props.secondLink}</p>
        </div>
        <div onClick={props.onClickThirdLink}>
            <p>{props.thirdLink}</p>
        </div>
    </MenuWrapper>
};

export default Menu;