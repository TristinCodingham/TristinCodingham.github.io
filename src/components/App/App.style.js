import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'Calibri';
  src:url('../../assets/fonts/calibri-font-family/calibri-bold.ttf');
  src:url('../../assets/fonts/calibri-font-family/calibri-bold-italic.ttf');
  src:url('../../assets/fonts/calibri-font-family/calibri-italic.ttf');
  src:url('../../assets/fonts/calibri-font-family/calibri-regular.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Libre Barcode 39 Text';
  src:url('../../assets/fonts/libre-barcode-39-text/LibreBarcode39Text-Regular.ttf');
}

@font-face {
  font-family: 'Source Code Pro';
  src:url('../../assets/fonts/source_code_pro/SourceCodePro-Light.ttf');
}

@font-face {
  font-family: 'Pattaya';
  src:url('../../assets/fonts/pattaya/Pattaya-Regular.ttf');
}

@font-face {
  font-family: 'Ethnocentric';
  src:url('../../assets/fonts/ethnocentric/ethnocentric rg.ttf');
}

@font-face {
  font-family: 'Arty';
  src:url('../../assets/fonts/arty-signature/Arty Signature.otf');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  margin: 0;
  font-family: "Calibri", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ededed;
}
  
code {
  font-family: 'Source Code Pro', sans-serif;
}
`;
