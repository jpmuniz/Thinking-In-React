import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }

    html{
        width: 100%;
        max-width: 12.25rem;
        margin: auto;
        
    }

    body {
        margin: 5rem 0
    }

`;

export { GlobalStyle };
