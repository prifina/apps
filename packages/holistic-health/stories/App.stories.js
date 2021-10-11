import React from "react";

import { LocalComponent } from "../src/App";
import Home from "../src/Home";

export default { title: "App" };

export const box = () => <LocalComponent />;
box.story = {
  name: "Box",
};
