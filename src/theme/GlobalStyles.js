import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}
    html {
    font-size: 62.5%;
}

    ul, li, a {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    text-decoration: none;
    list-style: none;
}

    h3 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    
}

    button {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    cursor: pointer
}

    body {
    background-color:#FEEAE6;
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    margin-bottom: 50px;
    line-height: 1.5;
    overflow-x: hidden;
}
`;

export default GlobalStyles;
