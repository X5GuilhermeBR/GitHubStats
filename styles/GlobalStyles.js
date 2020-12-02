import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #222831;
    --secondary: #9B9B9B;
    --tertiary: #B4B4B4;
    
    --white: #FFFFFF;
    --black: #000000;
    
    --hover: #2f3846;
    --background: #222831;
    
    --card-background: #EFEFEF;
    --card-box-shadow: rgba(0, 0, 0, 0.2);
    --icon: #24292E;
    --icon-search: #f05454;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
 
  html,
  body {
    max-width: 100vw;
    max-height: 100vw;
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background: var(--background);
  }

  body {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url('/images/background.svg') no-repeat center;
    }
  }
  
  *,
  button,
  input {
    border: 0;
    background: transparent;
  }
  
  a {
    text-decoration: none !important;
  }
`