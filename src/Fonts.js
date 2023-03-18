import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'got';
        src: url('./fonts/got.ttf') format('truetype');
      }
     
      `}
  />
)

export default Fonts