import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import { useNavigate, useLocation } from "react-router-dom";
import { programs } from "../context/useContent";
import CodeComponent from "../components/CodeComponent";
import HeaderNav from "../components/HeaderNav";
import SideBarNav from "../components/SideBarNav";
import Footer from "../components/Footer";
import MobileHeader from "../mobileComponents/MobileHeader";
import MobileNav from "../mobileComponents/MobileNav";
import { useEffect } from "react";
import CodeComponentMobile from "../mobileComponents/CodeComponentMobile";

function CodePage() {

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
         programs.map(program => (
            <button
               onClick={() => { nav(`/code#${program.ref}`) }}
               key={program.ref}
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
                  borderTop: `solid 4px ${colorMode ? palDark[4] : palLight[2]}`
               }}
            >
               <h3
                  style={{
                     fontFamily: "subheader",
                     fontSize: "16px",
                     color: "white"
                  }}
               >
                  {program.title}
               </h3>

               <p
                  style={{
                     fontFamily: "subtext",
                     fontSize: "16px",
                     color: "white"
                  }}
               >{program.meta}</p>

            </button>
         ))
      )
   }

   function renderComponents() {
      if (programs.length < 1) return

      return (
         <div
            style={{
               width: "100%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               marginTop: "48px",
               marginBottom: "48px",
               gap: "24px",
            }}
         >
            {programs.map(program => (
               <CodeComponent key={program.ref} project={program} />
            ))}
         </div>
      )
   }

   function renderComponentsMobile() {
      if (programs.length < 1) return

      return (
         <div
            style={{
               width: "100%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               marginTop: "48px",
               marginBottom: "48px",
               gap: "24px",
            }}
         >
            {programs.map(program => (
               <CodeComponentMobile key={program.ref} project={program} />
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
                        Programming
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
                        flexDirection: "column",
                        alignItems: "center"
                     }}
                  >

                     <div
                        style={{
                           display: "flex",
                           width: "90%",
                           justifyContent: "left",
                           alignItems: "flex-start",
                           fontFamily: "subHeader",
                           color: colorMode ? palDark[0] : palLight[5],
                           fontSize: "24px",
                           background: colorMode ? "black" : "white",
                           padding: "16px",
                           boxShadow: bs
                        }}
                     >
                        I have been programming for almost 2 years as of November 2025. I began learning python my freshman year of college, however I failed to grasp the underlying concept of programming then. About a year later I started learning Javascript as a means to create digital art for a course I was taking. Since then Ive gotten very into web development as a whole using everything from node js, express, websockets, nginx, react, structured query language, basically as many aspects of web development as I can in that time. Ive spent much time deploying a number of full stack application using AWS such as a skydiving logbook CRUD app I made over the last summer. A project Im working on now (november 2025) is a social app for a local T-shirt buisness.(github link on my about page and at the bottom of the page)
                     </div>


                     <div
                        style={{
                           display: "flex",
                           width: "80%",
                           flexDirection: "column",
                           alignItems: "center",
                           padding: "8px",
                           backgroundColor: colorMode ? "black" : "white",
                           boxShadow: bs,
                        }}
                     >

                        {renderLinks()}

                     </div>

                  </div>

                  {/* split description / links ^*/}


                  {renderComponents()}


                  <Footer />



               </div>
               {/* content box ^*/}


            </div>

         </>
      )
   }

   function mobileLayout() {
      return (
         <>
            <div
               style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginBottom: '124px',
               }}
            >
               <MobileHeader text='Programming' format='banner' />

               <div
                  style={{
                     display: "flex",
                     width: "100%",
                     padding: "16px",
                     gap: "16px",
                     marginTop: "8px",
                     flexDirection: "column",
                     alignItems: "center"
                  }}
               >

                  <div
                     style={{
                        display: "flex",
                        width: "90%",
                        justifyContent: "left",
                        alignItems: "flex-start",
                        fontFamily: "subHeader",
                        color: colorMode ? palDark[0] : palLight[5],
                        fontSize: "11px",
                        background: colorMode ? "black" : "white",
                        padding: "16px",
                        boxShadow: bs
                     }}
                  >
                     I have been programming for almost 2 years as of November 2025. I began learning python my freshman year of college, however I failed to grasp the underlying concept of programming then. About a year later I started learning Javascript as a means to create digital art for a course I was taking. Since then Ive gotten very into web development as a whole using everything from node js, express, websockets, nginx, react, structured query language, basically as many aspects of web development as I can in that time. Ive spent much time deploying a number of full stack application using AWS such as a skydiving logbook CRUD app I made over the last summer. A project Im working on now (november 2025) is a social app for a local T-shirt buisness.(github link on my about page and at the bottom of the page)
                  </div>



                  {renderComponentsMobile()}



               </div>

               <Footer />

            </div>
            <MobileNav />
         </>
      )
   }

   return (<>
      {deviceType === 'desktop' && desktopLayout()}
      {deviceType === 'mobile' && mobileLayout()}

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
   </>)
}

export default CodePage