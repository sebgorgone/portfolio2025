import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import { useNavigate } from "react-router-dom";
import { designs } from "../context/useContent";
import HeaderNav from "../components/HeaderNav";
import SideBarNav from "../components/SideBarNav";
import DesignComponent from "../components/DesignComponent";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function DesignPage() {
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

   function renderLinks() {
   
         return (
            designs.map(design => (
               <button
               onClick={() => {nav(`/design#${design.ref}`)}}
               key={design.ref}
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
                  borderTop: `solid 4px ${colorMode ? palDark[3] : palLight[2]}`
               }}
               >
                  <h3
                     style={{
                        fontFamily: "subheader",
                        fontSize: "16px",
                        color: "white"
                     }}
                  >
                     {design.title}
                  </h3>
   
                  <p
                     style={{
                        fontFamily: "subtext",
                        fontSize: "16px",
                        color: "white"
                     }}
                  >{design.meta}</p>
   
               </button>
            ))
         )
   }

   function renderDesigns() {
      if (designs.length < 1) return

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
            {designs.map(design => (
               <DesignComponent key={design.ref} design={design} />
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
                           pointerEvents: "none", 
                           zIndex: 2,
                           fontFamily: "title"
                        }}
                     >
                        Graphic Design
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

                  {/* split description / links v*/}

                  <div
                     style={{
                        display: "flex",
                        width: "100%",
                        padding: "16px",
                        gap: "16px",
                        marginTop: "48px",
                        justifyContent: "center"
                     }}
                  >


                     <div
                        style={{
                           display: "flex",
                           width: "50%",
                           flexDirection: "column",
                           alignItems: "center",
                           padding: "8px",
                           paddingTop: "16px",
                           backgroundColor: colorMode ? "black" : "white",
                           boxShadow: bs
                        }}
                     >

                        {renderLinks()}

                     </div>

                  </div>

                  {/* split description / links ^*/}



                  {renderDesigns()}





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

export default DesignPage;