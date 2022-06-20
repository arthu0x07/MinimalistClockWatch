import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	*{
		margin: 0px;
        padding: 0px;
        box-sizing: border-box;
	}

    :root {
        --color-pointers-counter: #5a5a5a;
    }

	html{
        font-size: 100%;
	}

    body{
        height: 100vh;
        background-color: whitesmoke;
        color: #363636;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    
`;
