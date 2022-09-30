import React from 'react';
import { useDisclosure} from "@chakra-ui/react";
import {GlobalStyle} from "../../GlobalStyles";
import {AddNewUser} from "../index";

const HeaderOption = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <GlobalStyle.HeaderOptionContainer>
                <GlobalStyle.SearchInputContainer>
                    <GlobalStyle.SearchInput  placeholder='Search' onChange={e => props.search(e.target.value)} />
                </GlobalStyle.SearchInputContainer>
                <GlobalStyle.AddNewUserContainer onClick={onOpen}>
                    <AddNewUser isOpen={isOpen} onOpen={onOpen} onClose={onClose} User={props.User} NewUser={props.NewUser} />
                    <GlobalStyle.AddNewUserText>Add</GlobalStyle.AddNewUserText>
                </GlobalStyle.AddNewUserContainer>
            </GlobalStyle.HeaderOptionContainer>
        </>
    );
};

export default HeaderOption;
