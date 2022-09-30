import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";

const CardText = (props) => {
    return (
        <>
            <GlobalStyle.CardNormalTextContainer>
                <GlobalStyle.CardNormalText>{props?.dataType}: {props.Data}</GlobalStyle.CardNormalText>
            </GlobalStyle.CardNormalTextContainer>
        </>
    );
};

export default CardText;
