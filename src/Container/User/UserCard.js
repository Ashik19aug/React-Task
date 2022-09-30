import React from 'react';
import {GlobalStyle} from "../../GlobalStyles";
import {CardNameText, CardText} from "../../Component";

const UserCard = ({User}) => {
    return (
        <>
            {Array.isArray(User) && User.map((user, index) => (
                <GlobalStyle.CardContainer key={index + (Math.random() + 1).toString(36).substring(7)}>
                    <CardNameText Name={user?.name}/>
                    <CardText dataType={'E-mail  '} Data={user?.email}/>
                    <CardText dataType={'Phone  '} Data={user?.phone}/>
                </GlobalStyle.CardContainer>
            ))}
        </>
    );
};

export default UserCard;
