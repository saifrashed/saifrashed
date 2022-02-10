import { Global } from '@emotion/react'



const FontFace = () => (
    <Global
        styles={`
     @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 100;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Light.otf) format("otf");
      }
      @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 300;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Regular.otf) format("otf");
      }
      @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Medium.otf) format("otf");
      }
         @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 800;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Bold.otf) format("otf");
      }
      `}
    />
);


export default FontFace;
