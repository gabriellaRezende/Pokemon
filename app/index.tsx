import theme from "@/src/global/styles/theme";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}
