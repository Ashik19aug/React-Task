import React, {useEffect, useState} from 'react';
import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text, useToast
} from "@chakra-ui/react";
import {GlobalStyle} from "../../GlobalStyles";
import validator from "validator/es";

const AddNewUser = (props) => {
    const toast = useToast();
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');

    const addNewUser = () => {
        const validatorData = validateData();
        if(validatorData){
            props.NewUser([...props.User, newUser]);
            setNewUser({name:'', email:'', phone:'',});
            props.onClose();
            toast({
                position: 'top',
                description: "User Successfully Added",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    };

    const validateData = () => {
        if(newUser.name === ''){setNameErr('Error : invalid name.');}
        if(newUser.email === '' || !validator.isEmail(newUser.email)){setEmailErr('Error : Invalid email.');}
        if(newUser.phone === ''){setPhoneErr('Error : Invalid phone number.');}
        if(newUser.name === '' || newUser.email === '' || !validator.isEmail(newUser.email) || newUser.phone === ''){
            return false;
        } else {
            return true;
        }
    };

    useEffect(()=>{
        if(newUser.name !== ''){setNameErr('');}
        if(validator.isEmail(newUser.email)){setEmailErr('');}
        if(typeof newUser.phone !== '' ){setPhoneErr('');}
    },[newUser])

    return (
        <>
           <Flex>
               <Modal blockScrollOnMount={false} isOpen={props.isOpen} onClose={props.onClose}>
                   <ModalOverlay />
                   <ModalContent>
                       <ModalHeader>Add New Member</ModalHeader>
                       <ModalCloseButton />
                       <ModalBody>
                           <GlobalStyle.InputLabel>Name</GlobalStyle.InputLabel>
                           <GlobalStyle.InputContainer>
                               <GlobalStyle.SearchInput placeholder='Name' value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>
                               <GlobalStyle.ErrorMessage>{nameErr}</GlobalStyle.ErrorMessage>
                           </GlobalStyle.InputContainer>
                           <GlobalStyle.InputLabel>Email</GlobalStyle.InputLabel>
                           <GlobalStyle.InputContainer>
                               <GlobalStyle.SearchInput  placeholder='Email' value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                               <GlobalStyle.ErrorMessage>{emailErr}</GlobalStyle.ErrorMessage>
                           </GlobalStyle.InputContainer>
                           <GlobalStyle.InputLabel>Phone</GlobalStyle.InputLabel>
                           <GlobalStyle.InputContainer>
                               <GlobalStyle.SearchInput  placeholder='Phone' onKeyPress={(e) => !/[0-9-(-)-x]/.test(e.key) && e.preventDefault()} pattern="^-?[0-9]\d*\.?\d*$" value={newUser.phone} onChange={(e) => setNewUser({...newUser, phone: e.target.value})} />
                               <GlobalStyle.ErrorMessage>{phoneErr}</GlobalStyle.ErrorMessage>
                           </GlobalStyle.InputContainer>
                       </ModalBody>
                       <ModalFooter>
                           <Button mr={3} variant='ghost'  onClick={props.onClose}>Cancel</Button>
                           <Button colorScheme='blue' onClick={addNewUser}>Add</Button>
                       </ModalFooter>
                   </ModalContent>
               </Modal>
           </Flex>
        </>
    );
};

export default AddNewUser;
