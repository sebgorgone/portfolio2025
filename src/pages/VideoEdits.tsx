import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import { edits } from "../context/useContent";
import EditComponent from "../components/EditComponent";
import HeaderNav from "../components/HeaderNav";
import SideBarNav from "../components/SideBarNav";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function VideoEdits() {
   const location = useLocation();

   useEffect(() => {
  if (!location.hash) return;

  const refId = location.hash.replace("#", "");
  const el = document.getElementById(refId);
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  }
}, [location]);

   const { colorMode, palDark, palLight, } = useColorMode();
   const { deviceType } = useViewportSize();


   function renderEdits() {
      if (edits.length < 1) return

      return (
         <div
            style={{
               width: "100%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               marginTop: "48px"
            }}
         >
            {edits.map(edit => (
               <EditComponent key={edit.ref} edit={edit} />
            ))}
         </div>
      )
   }

   function desktopLayout() {

      return (
         <>
            <HeaderNav />
            <div
               style={{
                  paddingTop: "128px",
                  display: "flex",
                  minHeight: "calc(100vh - 128px)",
                  backgroundColor: "none",
                  width: "100%",
                  zIndex: 1,
                  marginBottom: "24px"
               }}
            >

               <SideBarNav />

               {/* content box v*/}
               <div
                  style={{
                     display: "flex",
                     flex: 1,
                     flexDirection: "column",

                  }}
               >

                  {/* headertitle v*/}
                  <div
                     style={{
                        position: "relative",
                        display: "flex",
                        // flex: 1,
                        height: "200px",
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
                           pointerEvents: "none", // so clicks pass through to iframe
                           zIndex: 2,
                           fontFamily: "title"
                        }}
                     >
                        Video Editing
                     </div>

                     {/* iframe background */}
                     <iframe
                        style={{
                           width: "100%",
                           height: "100%",
                           border: "none",
                           position: "absolute",
                           top: 0,
                           left: 0,
                           zIndex: 1,
                        }}
                        src={!colorMode ? "turningcubes/p5-light.html" : "turningcubes/p5-dark.html"}
                     />
                  </div>
                  {/* headertitle ^*/}


                  {renderEdits()}
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

export default VideoEdits;