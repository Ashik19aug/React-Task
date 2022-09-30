import {chakra, Flex, Input, Text} from '@chakra-ui/react'

const HeaderContainer = chakra(Flex, {
    baseStyle: {
        h: '5vh',
        bg: 'white',
        w: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        boxShadow:'md',
    },
});

const PageContainer = chakra(Flex, {
    baseStyle: {
        pl: '10%',
        pr: '10%',
        flexDirection:'column',
        // backgroundColor: '#898F9C',
    },
});

const HeaderTitleTextContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'100%',
        justifyContent: 'center',
        mt:'5vh',
    },
});

const HeaderTitleText = chakra(Text, {
    baseStyle: {
        fontSize:['1.5rem','1.8rem','2rem','2.2rem','2.5rem',],
        fontFamily:'poppins',
    },
});

const HeaderOptionContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'100%',
        justifyContent: 'center',
        mt:'2vh',
        flexDirection: 'row',
    },
});

const SearchInputContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'80%',
        justifyContent: 'flex-start',
    },
});

const InputContainer = chakra(Flex, {
    baseStyle: {
        flexDirection: 'column',
    },
});

const InputLabel = chakra(Text, {
    baseStyle: {
        mb: '0.5rem',
        mt: '1rem',
        color:'black',
        w:'100%',
        justifyContent: 'flex-start',
        fontSize:['0.8rem', '0.8rem','0.9rem', '0.9rem','1rem'],
    },
});

const ErrorMessage = chakra(Text, {
    baseStyle: {
        marginY: '0.2rem',
        color:'red',
        w:'100%',
        justifyContent: 'flex-start',
        fontSize:['0.5rem', '0.6rem','0.6rem', '0.7rem','0.7rem'],
    },
});

const SearchInput = chakra(Input, {
    baseStyle: {
        color:'black',
        boxShadow: 'md',
        borderColor: 'black',
        size: 'md',
        justifyContent: 'flex-start',
    },
});

const AddNewUserContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '1px',
        borderColor: 'black',
        borderRadius: '0.5rem',
        marginLeft: '2rem',
        boxShadow: 'md',
        _hover:{cursor:'pointer'},
    },
});

const AddNewUserText = chakra(Text, {
    baseStyle: {
        color:'black',
        fontSize:['0.8rem', '0.8rem','0.9rem', '0.9rem','1rem'],
    },
});

const UserCardContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginY: '5vh',
        flexWrap: 'wrap',
    },
});

const CardContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:['100%','45%','45%','30%','30%',],
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '1px',
        borderColor: 'black',
        height: ['15vh','15vh','18vh','20vh',],
        flexDirection: 'column',
        mb:'3vh',
        overflow:'hidden',
        boxShadow: 'md',
        borderRadius: '0.5rem',
    },
});

const CardNormalTextContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const CardNormalText = chakra(Text, {
    baseStyle: {
        color:'black',
        fontSize:['0.6rem', '0.7rem','0.7rem', '0.8rem','0.8rem'],
        // noOfLines: 1,
    },
});

const CardNameTextContainer = chakra(Flex, {
    baseStyle: {
        color:'black',
        w:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        mb: ['0.8rem', '1rem', '1rem', '1.2rem', '1.5rem']
    },
});

const CardNameText = chakra(Text, {
    baseStyle: {
        color:'black',
        fontSize:['0.8rem', '1rem','1rem', '1.2rem','1.5rem'],
        // noOfLines: 1,
    },
});

export default {HeaderContainer, PageContainer, HeaderOptionContainer, SearchInputContainer, SearchInput, InputContainer, InputLabel, ErrorMessage,
    AddNewUserContainer, AddNewUserText, HeaderTitleTextContainer, HeaderTitleText, UserCardContainer, CardContainer, CardNormalTextContainer, CardNormalText,
    CardNameTextContainer, CardNameText,
} ;
