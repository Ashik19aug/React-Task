import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {GlobalStyle} from "../../GlobalStyles";

const CardNameText = ({Name}) => {
    return (
        <>
            <GlobalStyle.CardNameTextContainer>
                <GlobalStyle.CardNameText>{Name}</GlobalStyle.CardNameText>
            </GlobalStyle.CardNameTextContainer>
        </>
    );
};

export default CardNameText;
