import { theme } from "@chakra-ui/core";
import { customIcons } from "./customIcons";
import { customColors } from "./customColors";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...customColors,
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

export default customTheme;
