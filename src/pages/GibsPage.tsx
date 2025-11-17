import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import SideBarNav from "../components/SideBarNav";
import HeaderNav from "../components/HeaderNav";

function GibsPage() {

   const { colorMode, palLight, palDark, bs } = useColorMode();
   const { deviceType } = useViewportSize();

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
                  }}
               >

                  {/* headertitle v*/}
                  <div
                     style={{
                        position: "relative",
                        display: "flex",
                        height: "200px",
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
                           transform: "translate(-50%, -50%)",
                           color: !colorMode ? palLight[3] : palDark[0],
                           fontSize: "48px",
                           fontWeight: 600,
                           textAlign: "center",
                           zIndex: 2,
                           fontFamily: "title",
                           whiteSpace: "nowrap"
                        }}
                     >
                        GIBS User Interface
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
                        justifyContent: 'center',
                        display: "flex",
                        width: "100%",
                        background:colorMode ? "black" : "white",
                        gap: '24px',
                        flexWrap: "wrap"
                     }}
                  >


                     {/* gibs div */}
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           flexDirection: 'column',
                           gap: '16px',
                           padding: '16px',

                        }}
                     >

                        <div
                           style={{}}
                        >

                        </div>


                     </div>



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

export default GibsPage;