import React from "react";

import { Checkbox } from "@chakra-ui/core";

const CheckboxTerms = ({ text }) => (
  <Checkbox defaultIsChecked={false} size="14px" borderColor="grey" w="314px">
    {text}
  </Checkbox>
);

export default CheckboxTerms;
