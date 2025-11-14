import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import SideBarNav from "../components/SideBarNav";
import HeaderNav from "../components/HeaderNav";

type Widget = {
   format: number,
   src: string,
   text: string
}

type Props = {
   content: Widget[],
   title: string
}

function CodeProjectPage(props: Props) {

   const { colorMode, palLight, palDark, bs } = useColorMode();
   const { deviceType } = useViewportSize();
   const { title, content } = props;

   function renderComponent(inp: Widget) {
      // text body
      if (inp.format === 0) {
         return (
            <div
               style={{
                  width: "90%",
                  maxWidth: "1440px",
                  padding: "16px",
                  fontFamily: 'body',
                  fontSize: "32px",
                  textAlign: 'left',
                  backgroundColor: colorMode ? palDark[5] : palLight[0],
                  color: colorMode ? palDark[2] : 'black'
               }}
            >
               {inp.text}
            </div>
         )
      }
      // landscape left
      if (inp.format === 1) {
         return (<div
            style={{
               width: "90%",
               maxWidth: "1440px",
               padding: "16px",
               fontFamily: 'body',
               fontSize: "32px",
               textAlign: 'left',
               backgroundColor: colorMode ? palDark[5] : palLight[0],
               color: colorMode ? palDark[2] : 'black',
               display: 'flex',
               alignItems: 'flex-start',
               justifyContent: 'center',
               gap: "16px"
            }}
         >
            <img
               style={{
                  width: '60%',
                  borderRadius: "8px",
                  boxShadow: bs
               }}
               alt='your browser doesnt support images'
               src={inp.src}
            />

            <p
               style={{ width: "30%" }}
            >{inp.text}</p>

         </div>)
      }

      //landscape right
      if (inp.format === 2) {
         return (<div
            style={{
               width: "90%",
               maxWidth: "1440px",
               padding: "16px",
               fontFamily: 'body',
               fontSize: "32px",
               textAlign: 'left',
               backgroundColor: colorMode ? palDark[5] : palLight[0],
               color: colorMode ? palDark[2] : 'black',
               display: 'flex',
               alignItems: 'flex-start',
               justifyContent: 'center',
               gap: "16px"
            }}
         >

            <p
               style={{ width: "30%" }}
            >{inp.text}</p>

            <img
               style={{
                  width: '60%',
                  borderRadius: "8px",
                  boxShadow: bs
               }}
               alt='your browser doesnt support images'
               src={inp.src}
            />

         </div>)
      }

      //portrait left

      if (inp.format === 3) {
         return (<div
            style={{
               width: "90%",
               maxWidth: "1440px",
               padding: "16px",
               fontFamily: 'body',
               fontSize: "32px",
               textAlign: 'left',
               backgroundColor: colorMode ? palDark[5] : palLight[0],
               color: colorMode ? palDark[2] : 'black',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               gap: "16px"
            }}
         >

            <img
               style={{
                  width: '30%',
                  borderRadius: "8px",
                  boxShadow: bs
               }}
               alt='your browser doesnt support images'
               src={inp.src}
            />

            <p
               style={{ width: "60%" }}
            >{inp.text}</p>

         </div>)
      }

      //portrait right 

      if (inp.format === 4) {
         return (<div
            style={{
               width: "90%",
               maxWidth: "1440px",
               padding: "16px",
               fontFamily: 'body',
               fontSize: "32px",
               textAlign: 'left',
               backgroundColor: colorMode ? palDark[5] : palLight[0],
               color: colorMode ? palDark[2] : 'black',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               gap: "16px"
            }}
         >

            <p
               style={{ width: "60%" }}
            >{inp.text}</p>

            <img
               style={{
                  width: '30%',
                  borderRadius: "8px",
                  boxShadow: bs
               }}
               alt='your browser doesnt support images'
               src={inp.src}
            />

         </div>)
      }

      //iframe left portrait + text
      if (inp.format === 5) {
         return (<div
            style={{
               width: "90%",
               maxWidth: "1440px",
               padding: "16px",
               fontFamily: 'body',
               fontSize: "32px",
               textAlign: 'left',
               backgroundColor: colorMode ? palDark[5] : palLight[0],
               color: colorMode ? palDark[2] : 'black',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               gap: "16px"
            }}
         >

            <iframe
               style={{
                  width: '30%',
                  borderRadius: "8px",
                  boxShadow: bs,
                  border: "none"
               }}
               src={inp.src}
            />

            <p
               style={{ width: "60%" }}
            >{inp.text}</p>

         </div>)
      }
      //iframe landscape 
      if (inp.format === 6) {
         return (
            <div
               style={{
                  width: "90%",
                  maxWidth: "1440px",
                  padding: "16px",
                  fontFamily: 'body',
                  backgroundColor: colorMode ? palDark[5] : palLight[0],
                  display: "flex",
                  justifyContent: "center"
               }}
            >
               <iframe
                  style={{
                     width: "80%",
                     height: "calc( ((100vw * .9) * .8) * (.5) )",
                     maxHeight: "calc ( ((1440px * .9) * .8) * (.5) )",
                     borderRadius: '8px',
                     boxShadow: bs,
                     border: 'none',
                  }}
                  src={inp.src}
               />
            </div>
         )
      }

      //image fullscreen landscape
      if (inp.format === 7) {
         return (<div
            style={{
               width: "90%",
               maxWidth: "1440px",
               padding: "16px",
               fontFamily: 'body',
               fontSize: "32px",
               textAlign: 'left',
               backgroundColor: colorMode ? palDark[5] : palLight[0],
               color: colorMode ? palDark[2] : 'black',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               gap: "16px"
            }}
         >

            <img
               style={{
                  width: '65%',
                  borderRadius: "8px",
                  boxShadow: bs
               }}
               alt='your browser doesnt support images'
               src={inp.src}
            />

         </div>)
      }

      if (inp.format === 8) {
         const paths = inp.src.split('-')
         return (
            <div
               style={{
                  width: "90%",
                  maxWidth: "1440px",
                  padding: "16px",
                  fontFamily: 'body',
                  fontSize: "32px",
                  textAlign: 'center',
                  backgroundColor: "black",
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: "16px",
                  flexWrap: 'wrap'
               }}
            >
               {inp.text !== '' &&
                  <div style={{width: "90%", display: 'flex', textAlign: 'center'}}>
                     {inp.text}
                  </div>}
               {paths.map((p, i) => (
                   <img 
                     style={{
                        width: "30%",
                        borderRadius: '4px',
                     }}
                     src={p}
                     key={i}
                     alt='Your browser doesnt not support viewing images'
                  />
               ))}
            </div>
         );
      }

   }

   function desktopLayout() {

      return (
         <>
            <HeaderNav />
            <div
               style={{
                  position: "fixed",
                  top: "128px",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  width: "100vw",
                  height: "calc(100vh - 128px)",
                  overflow: "hidden",
                  zIndex: 1,
               }}
            >

               <SideBarNav />

               {/* content box v*/}
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     flex: 1,
                     overflowY: "auto",
                     height: "100%",
                     scrollbarGutter: "stable",
                  }}
               >

                  {/* headertitle v*/}
                  <div
                     style={{
                        display: "flex",
                        height: "200px",
                        width: "100%",
                        justifyContent: "center"
                     }}
                  >
                     {/* overlayed text */}
                     <div
                        style={{
                           position: "relative",
                           top: "35%",
                           left: "38%",
                           color: !colorMode ? palLight[3] : palDark[0],
                           fontSize: "48px",
                           fontWeight: 600,
                           textAlign: "center",
                           zIndex: 2,
                           fontFamily: "title",
                           width: 0,
                           whiteSpace: "nowrap"
                        }}
                     >
                        {title}
                     </div>

                     {/* iframe background */}
                     <iframe
                        style={{
                           width: "100%",
                           height: "200px",
                           border: "none",
                           top: 0,
                           left: 0,
                           zIndex: 1,
                        }}
                        src={!colorMode ? "turningcubes/p5-light.html" : "turningcubes/p5-dark.html"}
                     />
                  </div>
                  {/* headertitle ^*/}

                  {/* conent area v*/}

                  <div
                     style={{
                        alignItems: 'center',
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: '600px',

                     }}
                  >
                     {content.map(i => renderComponent(i))}

                  </div>

                  {/* conent area ^*/}




               </div>
               {/* content box ^*/}


            </div>

         </>
      )
   }


   return (
      <>
         {deviceType === 'desktop' && desktopLayout()}

         {/* background */}
         <div
            style={{
               position: "fixed",
               zIndex: -1,
               backgroundColor: colorMode ? palDark[1] : palLight[1],
               width: "100vw",
               height: "100vh",
               top: 0
            }}
         ></div>
      </>
   )
}

export default CodeProjectPage;