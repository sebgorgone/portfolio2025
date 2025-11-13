import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import { useNavigate } from "react-router-dom";
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
            el.scrollIntoView({ behavior: "smooth", block: "center" });
         }, 400);
      }
   }, [location]);

   const { colorMode, palDark, palLight, bs } = useColorMode();
   const { deviceType } = useViewportSize();


   const nav = useNavigate();


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

   function renderLinks() {

      return (
         edits.map(edit => (
            <button
               onClick={() => { nav(`/edits#${edit.ref}`) }}
               key={edit.ref}
               className='editLinkButton'
               style={{
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  border: "none",
                  boxShadow: bs,
                  display: "flex",
                  backgroundColor: colorMode ? palDark[1] : palLight[5],
                  justifyContent: "space-between",
                  padding: "8px",
                  marginBottom: "16px",
                  borderTop: `solid 4px ${palLight[4]}`
               }}
            >
               <h3
                  style={{
                     fontFamily: "subheader",
                     fontSize: "16px",
                     color: "white"
                  }}
               >
                  {edit.title}
               </h3>

               <p
                  style={{
                     fontFamily: "subtext",
                     fontSize: "12px",
                     color: "white"
                  }}
               >{edit.meta}</p>

            </button>
         ))
      )
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
                        width: "100%"
                     }}
                  >
                     {/* overlayed text */}
                     <div
                        style={{
                           position: "relative",
                           top: "35%",
                           left: "39%",
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
                        Video Editing
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

                  {/* split description / links v*/}

                  <div
                     style={{
                        display: "flex",
                        width: "100%",
                        padding: "16px",
                        gap: "16px",
                        marginTop: "48px",
                     }}
                  >

                     <div
                        style={{
                           display: "flex",
                           flex: 1,
                           justifyContent: "left",
                           alignItems: "flex-start",
                           fontFamily: "subHeader",
                           color: colorMode ? palDark[0] : palLight[5],
                           fontSize: "32px",
                           background: colorMode ? "black" : "white",
                           padding: "16px",
                           boxShadow: bs
                        }}
                     >
                        As early as I had access to a computer I've loved editing videos. It didnt matter what I had- video games, skiing, skatebaording, sports. If I had clips of it I made an edit. Its always been a big hobby of mine and I feel a fitting part of my portfolio. I post just about all of them on my instagram. Link at the bottom of the page.
                     </div>


                     <div
                        style={{
                           display: "flex",
                           flex: 1,
                           flexDirection: "column",
                           alignItems: "center",
                           padding: "8px",
                           backgroundColor: colorMode ? "black" : "white",
                           boxShadow: bs
                        }}
                     >

                        {renderLinks()}

                     </div>

                  </div>

                  {/* split description / links ^*/}


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