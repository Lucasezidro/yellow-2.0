import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --white: #ffffff;

        --yellow-500: #EDBF31;
        --purple-500: #AF4DFF;
        --purple-700: #7332a8;

        --gray-100: #e1e1e6;
        --gray-300: #a8a8b3;
        --gray-700: #323238;
        --gray-800: #29292e;
        --gray-850: #1f2729;
        --gray-900: #121214;

    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
    }
}

body{
    background: var(--gray-900);
    font: 500 16px "Poppins", sans-serif;
    color: var(--gray-100);
}
button, ul, li, span, input, textarea, select {
    font: 400 16px "Poppins", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    color: var(--gray-100);
}

button{
    cursor: pointer;
    border: none;
}

`