import React, {useEffect, useState} from 'react';
import {getApiData} from "../../Helper/ApiHelper";
import {GlobalStyle} from "../../GlobalStyles";
import { HOME} from "../../URLs/Urls";
import {HeaderOption, UserCard} from "../../Container";
import { HeaderTitle } from "../../Component";
import {TITLE} from "../../Constant/ConstantValue";

const Home = () => {

    const [dataLists, setDataLists] = useState([]);
    const [filterDataLists, setFilterDataLists] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        ResponseDataList();
    }, []);

    async function ResponseDataList() {
        const Data = await getApiData(HOME);
        if(Data?.success){
            setDataLists(Data?.response?.data);
        }
    }

    useEffect(() => {
        if(searchText!==''){
            setFilterDataLists(dataLists.filter( (dataLists) => dataLists.name.toLowerCase().includes(searchText)));
        } else {
            setFilterDataLists([]);
        }
    }, [searchText,dataLists]);

    return (
        <>
            <GlobalStyle.PageContainer>
                <HeaderTitle Title={TITLE} />
                <HeaderOption search={setSearchText} User={dataLists} NewUser={setDataLists} />
                <GlobalStyle.UserCardContainer>
                    <UserCard User={searchText !== '' ? filterDataLists : dataLists} />
                </GlobalStyle.UserCardContainer>
            </GlobalStyle.PageContainer>
        </>
    );
};

export default Home;
