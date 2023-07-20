import { Global } from '@emotion/react'



const FontFace = () => (
    <Global
        styles={`
     @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 100;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Light.woff2) format("woff2");
      }
      @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 300;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Regular.woff2) format("woff2");
      }
      @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Medium.woff2) format("woff2");
      }
         @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 800;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Bold.woff2) format("woff2");
      }
      `}
    />
);


export default FontFace;
