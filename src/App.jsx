import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {AiFillContacts} from 'react-icons/ai'
import { Heading, Flex, Box } from "@chakra-ui/layout";

import ContactCard from "./component/contact";
import Kmodal from "./component/kModal";
import ContactForm from "./component/ContactForm";
import {  useState } from "react";
import ContactsDb from "./data/Contacts";
const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editableContact, setEditableContact] = useState(null);
  // const [contacts,dispatch]=useReducer(contactsReducer,ContactsDb)
  const [contacts, setContacts] = useState(ContactsDb);
  const [searchedContact, setSearchedContact] = useState("");
  const AllSearchedContact = contacts.filter((contact) =>
    contact.name.includes(searchedContact)
  );
  function editContact(id) {
    //use to return contact which has to be edit
    const contact = contacts.find((contact) => contact.id === id);
    setEditableContact(contact);
  }
  function deleteContact(id) {
    console.log(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  }
  function addContact(contact) {
    console.log("Adding");
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  }

  function updateContact(updatedContact) {
    const index = updatedContact.id;
    const newContacts = [...contacts];
    newContacts.splice(index - 1, 1, updatedContact);
    setContacts(newContacts);
  }

  return (
    <div id="main">
      <Kmodal isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <ContactForm
          onClose={onClose}
          updateContact={updateContact}
          setEditableContact={setEditableContact}
          editableContact={editableContact}
          addContact={addContact}
        />
      </Kmodal>
      <Box width={'50%'} margin={'auto'}>
        <Flex p="4" justify="center" align="center">
          <Heading display={'flex'} gap={'0.8em'} color={'white'} as="h1" textTransform="uppercase">
            <AiFillContacts size={50}/>   Contact App
          </Heading>
        </Flex>
        <Box p="4">
          <Button
            cursor="pointer"
            bg="purple"
            color="white"
            w="100%"
            fontSize="xl"
            fontWeight="bold"
            colorScheme="purple"
            onClick={onOpen}
          >
            <AddIcon h="20px" w="20px" mr="4" />{" "}
            {editableContact ? "Edit" : "Add"} Contact
          </Button>
        </Box>
        <Box p="4">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray" />}
            />
            <Input
              focusBorderColor="purple"
              type="tel"
              onChange={(e) => {
                setSearchedContact(e.target.value);
              }}
              placeholder="Search Contact..."
            />
          </InputGroup>
        </Box>
        <Box p="4">
          {AllSearchedContact.map((contact, index) => (
            <ContactCard
              editContact={editContact}
              deleteContact={deleteContact}
              id={contact.id}
              key={contact.id}
              email={contact.email}
              name={contact.name}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default App;
