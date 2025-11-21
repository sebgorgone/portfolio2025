import { useColorMode } from "../context/ColorModeContext"
type props = {
   text: string,
   format: 'banner' | 'hero'
}

function MobileHeader(props: props) {

   const { colorMode, palLight, palDark } = useColorMode()

   const { text, format } = props

   return (
      <div
         style={{
            position: "relative",
            display: "flex",
            height: format === 'hero' ? '128px' : '86px',
            width: "100%",
            justifyContent: "center",
         }}
      >
         {/* overlayed text */}
         <div
            style={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -40%)",
               color: !colorMode ? palLight[3] : palDark[0],
               fontSize: "28px",
               textAlign: "center",
               zIndex: 2,
               fontFamily: "title",
               whiteSpace: "nowrap"
            }}
         >
            {text}
         </div>

         {/* iframe background */}
         <iframe
            style={{
               width: "100%",
               height: format === 'hero' ? '128px' : '86px',
               border: "none",
               top: 0,
               left: 0,
               zIndex: 1,
            }}
            src={!colorMode ? "turningcubes/p5-light.html" : "turningcubes/p5-dark.html"}
         />
      </div>
   )
};

export default MobileHeader;