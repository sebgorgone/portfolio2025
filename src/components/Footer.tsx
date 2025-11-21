import { useColorMode } from "../context/ColorModeContext";
import { programs, edits, designs } from "../context/useContent";
import { useViewportSize } from "../context/useViewport";

function Footer() {


   const { colorMode, palLight, palDark } = useColorMode();

   const { deviceType } = useViewportSize();

   function renderLinks(inp: any) {
      if (inp.length === 0) return

      return(
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               gap: '8px',
               width: "10px",
               whiteSpace: 'nowrap'
            }}
         >
            <a
               style={{
                  fontFamily: 'subHeader',
                  color: colorMode ? palDark[0]: palLight[5],
                  fontSize: "24px"
               }}
               target='_self'
               href='/#/edits'
            >
               {inp === edits && 'Edits'}
               {inp === designs && 'Design'}
               {inp === programs && 'Code'}
            </a>
               {/* @ts-ignore */}
            {inp.map((n, i) => (
               <a
               key={i}
               style={{
                  fontFamily: "subtext",
                  fontSize: "16px",
                  color: colorMode ? palDark[2] : palLight[5]
               }}
               target='_self'
               href={`/#/edits#${n.ref}`}
               >{n.title}</a>
            ))}


         </div>
      )

   };

   function desktopLayout() {



      return (
         <>
            <div
               style={{ 
                  display: 'flex',
                  width: "100%",
                  padding: "8px",
                  justifyContent: "space-around",
                  alignItems: 'flex-start',
                  flexWrap: "wrap"
               }}
            >

               {renderLinks(edits)}

               {renderLinks(designs)}

               {renderLinks(programs)}



            </div>

            <div
               style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  alignItems: "center"
               }}
            >
               <a
                  target='_blank'
                  href='https://www.linkedin.com/in/sebastian-gorgone/'
                  style={{
                     color: colorMode ? palDark[1]: palLight[1],
                     fontSize: '24px',
                     fontFamily: 'body'
                  }}
               >LinkedIn</a>
               <a
                  target='_blank'
                  href='https://www.instagram.com/_sgorgone'
                  style={{
                     color: colorMode ? palDark[1]: palLight[1],
                     fontSize: '24px',
                     fontFamily: 'body'
                  }}
               >Instagram</a>
               <a
                  target='_blank'
                  href='https://github.com/sebgorgone'
                  style={{
                     color: colorMode ? palDark[1]: palLight[1],
                     fontSize: '24px',
                     fontFamily: 'body'
                  }}
               >GitHub</a>

            </div>

            <div
               style={{
                  width: "100%",
                  display: 'flex',
                  fontSize: "12px",
                  fontFamily: 'subtext',
                  color: colorMode ? 'white' : palLight[5],
                  justifyContent: 'center'
               }}
            >Sebastian Gorgone 2025</div>
         </>
      )
   };


   return (

      <div
         style={{
            width: "100%",
            background: colorMode ? palDark[5] : palLight[0],
            color: colorMode ? palDark[0] : palLight[5],
            display: 'flex',
            flexDirection: 'column',
            padding: '24px'
         }}
      >

         {deviceType === 'desktop' && desktopLayout()}

      </div>

   );

}

export default Footer;