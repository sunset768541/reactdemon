import {createGlobalStyle} from 'styled-components'
// eslint-disable-next-line import/no-unresolved


const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;

  }

  body {
    width: 100%;
    margin: 0px;
    padding: 0px;
    border: 0px;
    overflow: hidden;
    min-width: 1280px;
  }

  ,
  img {
    height: auto;
    max-width: 100%;
  }

`

export default GlobalStyle
