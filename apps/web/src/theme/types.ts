import 'styled-components';

interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
