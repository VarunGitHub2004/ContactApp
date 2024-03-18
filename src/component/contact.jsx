import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@chakra-ui/react";
const ContactCard = ({editContact,name,email,id,deleteContact}) => {
  return (
    <Flex
      color="white"
      justify="space-between"
      bg="purple"
      p="1em"
      borderRadius="1em"
      boxShadow="xl"
      mb="4"
    >
        <Flex align="center">
          <Box mr="4">
            <FontAwesomeIcon  width={'100%'} size="3x" icon={faUser} mr="4" />
          </Box>
          <Stack>
            <Text>{name}</Text>
            <Text>{email}</Text>
          </Stack>
        </Flex>

      <Flex align="center">
        <Box cursor="pointer" mr="4" >
        <Button cursor="pointer" bg="purple" border="none" color="white" onClick={()=>editContact(id)}><FontAwesomeIcon size="2x" icon={faEdit} /></Button>  
        </Box>
        <Box >
        <Button cursor="pointer" bg="purple" border="none" color="red"   onClick={()=>deleteContact(id)}><FontAwesomeIcon size="2x" icon={faTrash} /></Button>  
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactCard;