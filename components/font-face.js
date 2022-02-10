import { Global } from '@emotion/react'



const FontFace = () => (
    <Global
        styles={`
     @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 100;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Light.ttf) format("ttf");
      }
      @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 300;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Regular.ttf) format("ttf");
      }
      @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Medium.ttf) format("ttf");
      }
         @font-face {
        font-family: "HelveticaNeue";
        font-style: normal;
        font-weight: 800;
        font-display: block;
        src: url(./fonts/HelveticaNeue-Bold.ttf) format("ttf");
      }
      `}
    />
);


export default FontFace;
