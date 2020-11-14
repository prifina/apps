import React from "react";

import { Box, Input, FormControl, FormLabel } from "@chakra-ui/core";

const FormInput = ({ title, placeholder, form, fieldName }) => (
  <FormControl>
    <FormLabel
      height="22px"
      htmlFor="fname"
      textTransform="capitalize"
      fontSize="14px"
      pt="24px"
    >
      {title}
    </FormLabel>
    <Input
      borderColor="#D9D9D9"
      height="32px"
      id="fname"
      placeholder={placeholder} //color of the placeholder
      onChange={(e) => form.setFieldValue(fieldName, e.target.value)}
    />
  </FormControl>
);

export default FormInput;
