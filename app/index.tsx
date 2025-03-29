import theme from "@/src/global/styles/theme";
import { Welcome } from "@/src/pages/welcome/main";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>

      <Welcome />
      
    </ThemeProvider>
  );
}
