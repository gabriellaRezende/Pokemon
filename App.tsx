import { StatusBar } from "expo-status-bar";
import Theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
import { Welcome } from "./src/pages/Welcome";


export default function App() {
    return (
        //Tudo que estiver dentro do ThemeProvider vai ter acesso ao que foi colocado no theme.ts
         <ThemeProvider theme={Theme}> 
         <Welcome />
            
        </ThemeProvider>

    );
}