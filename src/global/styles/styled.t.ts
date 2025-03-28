// Referencia de tipos, mergiando interfaces, Todos os temas criado na pasta theme.ts vão ser encontrados

import 'styled-components'

import theme from './theme'

declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType{}
} 