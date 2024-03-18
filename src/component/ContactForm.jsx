import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const initialValue = {
  name: "",
  email: "",
  id: "",
};
const ContactForm = ({
  onClose,
  editableContact,
  setEditableContact,
  addContact,
  updateContact,
}) => {
  const [editContact, setEditContact] = useState(editableContact);
  const [contact, setContact] = useState(initialValue);

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    if (editableContact) {
      updateContact(contact);
      setEditableContact(null);
      alert("Contact Successfully updated!");
    } else {
      console.log("Submitting");
      addContact(contact);
      setContact(initialValue);
    }
    onClose();
  }

  useEffect(() => {
    if (editableContact) setContact(editContact);
  }, [editableContact]);
  return (
    <div>
      <Stack
        width={'100%'}
        bg=" #B931FC"
        padding={'1em'}
        color={'white'}
        borderRadius={'3px'}
      >
        <FormControl className="FormControl">
          <FormLabel >Name</FormLabel>
          <Input
            onChange={handleChange}
            name="name"
            type="text"
            value={contact.name}
          />
        </FormControl>
        <FormControl className="FormControl">
          <FormLabel >Email address</FormLabel>
          <Input
            onChange={handleChange}
            name="email"
            type="email"
            value={contact.email}
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          cursor="pointer"
          type="submit"
        >
          {editableContact ? "Edit" : "Add"}Contact
        </Button>
      </Stack>
    </div>
  );
};

export default ContactForm;
