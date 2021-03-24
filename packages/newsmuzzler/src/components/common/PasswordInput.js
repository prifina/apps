import React, { useState } from "react";

import {
  Box,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  Icon,
} from "@chakra-ui/core";

export default function PasswordInput({ title, placeholder, fieldName, form }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel
        height="22px"
        htmlFor="fname"
        textTransform="capitalize"
        fontSize="14px"
        pt="24px"
        w="281px"
      >
        {title}
      </FormLabel>
      <InputGroup display="block">
        <Input
          borderColor="#D9D9D9"
          height="32px"
          type={show ? "text" : "password"}
          placeholder={placeholder} //color of the placeholder
          onChange={(e) => form.setFieldValue(fieldName, e.target.value)}
        />
        <InputRightElement
          w="0px"
          children={
            <Icon
              name={show ? "view" : "view-off"}
              color="black"
              onClick={handleClick}
            />
          }
        ></InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
