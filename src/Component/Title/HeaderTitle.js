import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";

const HeaderTitle = (props) => {
    return (
        <>
            <GlobalStyle.HeaderTitleTextContainer>
                <GlobalStyle.HeaderTitleText>{props.Title}</GlobalStyle.HeaderTitleText>
            </GlobalStyle.HeaderTitleTextContainer>
        </>
    );
};

export default HeaderTitle;
