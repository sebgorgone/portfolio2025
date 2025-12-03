import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import SideBarNav from "../components/SideBarNav";
import HeaderNav from "../components/HeaderNav";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import MobileHeader from "../mobileComponents/MobileHeader";
import MobileNav from "../mobileComponents/MobileNav";

function GibsPage() {

   const { colorMode, palLight, palDark, bs } = useColorMode();
   const { deviceType } = useViewportSize();


   const [x, setX] = useState(0);

   const [y, setY] = useState(0);

   const [z, setZ] = useState(0);

   const [t, setT] = useState(new Date().toISOString().split('T')[0])

   const [upperBoundX, setUpperBoundX] = useState(0);

   const [upperBoundY, setUpperBoundY] = useState(0);




   const tileUrl = `${"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best"}/MODIS_Terra_CorrectedReflectance_TrueColor/default/${t}/${"GoogleMapsCompatible_Level9"}/${z}/${y}/${x}.jpg`;

   useEffect(() => {
      removeDay()
      const bound = Math.pow(2, z) - 1;
      setUpperBoundX(bound);
      setUpperBoundY(bound);
   }, [z]);

   const zoomIn = () => {
      if (z >= 5) return;
      const gridSize = Math.pow(2, z);
      const newZ = z + 1;
      const newSize = Math.pow(2, newZ);
      const normX = (x + 0.5) / gridSize;
      const normY = (y + 0.5) / gridSize;

      let nextX = 0
      let nextY = 0

      if (z < 2) {
         nextX = Math.floor(normX * newSize);
         nextY = Math.floor(normY * newSize);
      }

      if (z === 2) {
         nextX = Math.floor(normX * newSize) - 1;
         nextY = Math.floor(normY * newSize) - 1;
      }

      if (z === 3) {
         nextX = Math.floor(normX * newSize) - 1;
         nextY = Math.floor(normY * newSize) - 1;
      }

      if (z === 4) {
         nextX = Math.floor(normX * newSize) - 1;
         nextY = Math.floor(normY * newSize) - 1;
      }
      // const nextX = Math.floor(normX * newSize);
      // const nextY = Math.floor(normY * newSize);
      setX(nextX);
      setY(nextY);
      setZ(newZ);
   };

   const zoomOut = () => {
      if (z <= 0) return;
      const gridSize = Math.pow(2, z);
      const newZ = z - 1;
      const newSize = Math.pow(2, newZ);
      const normX = (x + 0.5) / gridSize;
      const normY = (y + 0.5) / gridSize;
      const nextX = Math.floor(normX * newSize);
      const nextY = Math.floor(normY * newSize);
      setX(nextX);
      setY(nextY);
      setZ(newZ);
   };

   function addDay() {
      const today = new Date()
      const d = new Date(t);

      d.setDate(d.getDate() + 1);

      if (d > new Date(today)) return;
      setT(d.toISOString().split('T')[0])
   }

   function removeDay() {
      const d = new Date(t);
      d.setDate(d.getDate() - 1);
      setT(d.toISOString().split('T')[0])
   }



   function renderGridUI() {
      if (z === 0) return

      const scale = z > 6;

      let limitX;

      let limitY;

      if (scale) {
         limitX = Math.pow(2, 5) - 1;
         limitY = Math.pow(2, 5) - 1;
      } else {
         limitX = upperBoundX
         limitY = upperBoundY
      }

      return (
         <div
            style={{
               width: "calc(50vw * .6)",
               minWidth: "250px * .6",
               maxWidth: "450px * .6",
               height: "calc(50vw * .6)",
               minHeight: "250px * .6",
               maxHeight: "450px * .6",
               background: colorMode ? palDark[0] : palLight[1],
               display: "flex",
               flexDirection: "column",
               transition: '0ms'
            }}
         >
            {Array.from({ length: limitY + 1 }).map((_, i) => (
               <div
                  key={i}
                  style={{
                     width: "100%",
                     display: 'flex',
                     flex: 1,
                  }}
               >
                  {Array.from({ length: limitX + 1 }).map((_, j) => (
                     <button
                        key={j}
                        style={{
                           flex: 1,
                           background: scale ? (y === i && x === j) ? 'gold' : 'none' : (y === i && x === j) ? 'gold' : 'none',
                           border: 'solid 1px black'
                        }}
                        onClick={() => { setX(j); setY(i) }}
                     >

                     </button>
                  ))}
               </div>
            ))}

         </div>
      )
   }

   function renderGridUIMobile() {
      if (z === 0) return

      const scale = z > 5;

      let limitX;

      let limitY;

      if (scale) {
         limitX = Math.pow(2, 5) - 1;
         limitY = Math.pow(2, 5) - 1;
      } else {
         limitX = upperBoundX
         limitY = upperBoundY
      }

      return (
         <div
            style={{
               width: "calc((100vh - 120px) * .35)",
               height: "calc((100vh - 120px) * .35)",
               background: colorMode ? palDark[0] : palLight[1],
               display: "flex",
               flexDirection: "column",
               transition: '0ms'
            }}
         >
            {Array.from({ length: limitY + 1 }).map((_, i) => (
               <div
                  key={i}
                  style={{
                     width: "100%",
                     display: 'flex',
                     flex: 1,
                  }}
               >
                  {Array.from({ length: limitX + 1 }).map((_, j) => (
                     <button
                        key={j}
                        style={{
                           flex: 1,
                           background: scale ? (y === i && x === j) ? 'gold' : 'none' : (y === i && x === j) ? 'gold' : 'none',
                           border: 'solid 1px black'
                        }}
                        onClick={() => { setX(j); setY(i) }}
                     >

                     </button>
                  ))}
               </div>
            ))}

         </div>
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
                  gap: '12px'
               }}
            >
               <MobileHeader text='GIBS API User Interface' format='banner' />

               {renderGridUIMobile()}

               <img
                  style={{
                     width: "calc((100vh - 120px) * .35)",
                     boxShadow: bs,
                     border: 'none',
                     borderRadius: '5%',
                     color: colorMode ? 'white' : 'black'
                  }}
                  alt='gibs api image https://nasa-gibs.github.io/gibs-api-docs/'
                  src={tileUrl}
               />

               <div
                  style={{
                     display: "flex",
                     flexDirection: 'column',
                     alignItems: "center",
                     gap: "8px",
                     color: colorMode ? palDark[4] : palLight[5],
                     backgroundColor: colorMode ? palDark[1] : palLight[1],
                     borderRadius: '8px',
                     boxShadow: bs
                  }}
               >

                  <div
                     style={{
                        display: 'flex',
                        alignItems: 'center'
                     }}
                  >

                     <button
                        type='button'
                        onClick={() => {
                           if (x === 0) return;
                           setX(prev => prev - 1);
                        }}
                        style={{
                           fontSize: "32px",
                           background: "none",
                           border: "none",
                           color: colorMode ? palDark[0] : palLight[5],
                        }}
                     >
                        {/* @ts-ignore */}
                        <ion-icon name="caret-back-circle"></ion-icon>
                     </button>

                     <button
                        type='button'
                        onClick={() => {
                           if (x === upperBoundX) return;
                           setX(prev => prev + 1);
                        }}
                        style={{
                           fontSize: "32px",
                           background: "none",
                           border: "none",
                           color: colorMode ? palDark[0] : palLight[5],
                        }}
                     >
                        {/* @ts-ignore */}
                        <ion-icon name="caret-forward-circle"></ion-icon>
                     </button>

                     <button
                        type='button'
                        onClick={() => {
                           if (y === 0) return;
                           setY(prev => prev - 1);
                        }}
                        style={{
                           fontSize: "32px",
                           background: "none",
                           border: "none",
                           color: colorMode ? palDark[0] : palLight[5],
                        }}
                     >
                        {/* @ts-ignore */}
                        <ion-icon name="caret-up-circle"></ion-icon>
                     </button>

                     <button
                        type='button'
                        onClick={() => {
                           if (y === upperBoundY) return;
                           setY(prev => prev + 1);
                        }}
                        style={{
                           fontSize: "32px",
                           background: "none",
                           border: "none",
                           color: colorMode ? palDark[0] : palLight[5],
                        }}
                     >
                        {/* @ts-ignore */}
                        <ion-icon name="caret-down-circle"></ion-icon>
                     </button>

                     <button
                        style={{
                           border: "none",
                           background: "none",
                           fontSize: "32px",
                           color: colorMode ? palDark[0] : palLight[5],
                        }}
                        type='button'
                        onClick={
                           () => {
                              zoomOut()
                           }
                        }
                     >
                        {/* @ts-ignore */}
                        <ion-icon name="remove-circle"></ion-icon>
                     </button>

                     <button
                        style={{
                           border: "none",
                           background: "none",
                           fontSize: "32px",
                           color: colorMode ? palDark[0] : palLight[5],
                        }}
                        type='button'
                        onClick={
                           () => {
                              zoomIn()
                           }
                        }
                     >
                        {/* @ts-ignore */}
                        <ion-icon name="add-circle"></ion-icon>
                     </button>

                  </div>

                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: colorMode ? palDark[0] : palLight[5],
                        fontFamily: 'body',
                        width: '75%',
                        paddingBottom: '8px'
                     }}
                  >
                     <p>x: {x}</p>
                     <p>y: {y}</p>
                     <p>z: {z}</p>

                  </div>



               </div>

            </div>
            <MobileNav />
         </>
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
                        background: colorMode ? "black" : "white",
                        gap: '24px',
                        flexWrap: "wrap"
                     }}
                  >


                     {/* gibs div */}
                     <div
                        style={{
                           display: "flex",
                           alignItems: "flex-start",
                           justifyContent: 'center',
                           gap: '16px',
                           padding: '16px',
                           width: "100%"

                        }}
                     >

                        <div
                           style={{
                              width: '50%',
                              minWidth: '500px',
                              maxWidth: '900px',
                              padding: '32px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                           }}
                        >

                           <img
                              style={{
                                 width: "70%",
                                 boxShadow: bs,
                                 border: 'none',
                                 borderRadius: '5%',
                                 color: colorMode ? 'white' : 'black'
                              }}
                              alt='gibs api image https://nasa-gibs.github.io/gibs-api-docs/'
                              src={tileUrl}
                           />

                           <div
                              style={{
                                 display: "flex",
                                 flexDirection: 'column',
                                 alignItems: "center",
                                 gap: "8px",
                                 color: colorMode ? palDark[4] : palLight[5],
                                 margin: "32px",
                                 backgroundColor: colorMode ? palDark[1] : palLight[1],
                                 paddingTop: '12px',
                                 borderRadius: '8px',
                                 boxShadow: bs
                              }}
                           >

                              <div
                                 style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                 }}
                              >

                                 <button
                                    type='button'
                                    onClick={() => {
                                       if (x === 0) return;
                                       setX(prev => prev - 1);
                                    }}
                                    style={{
                                       fontSize: "48px",
                                       background: "none",
                                       border: "none",
                                       color: colorMode ? palDark[0] : palLight[5],
                                    }}
                                 >
                                    {/* @ts-ignore */}
                                    <ion-icon name="caret-back-circle"></ion-icon>
                                 </button>

                                 <button
                                    type='button'
                                    onClick={() => {
                                       if (x === upperBoundX) return;
                                       setX(prev => prev + 1);
                                    }}
                                    style={{
                                       fontSize: "48px",
                                       background: "none",
                                       border: "none",
                                       color: colorMode ? palDark[0] : palLight[5],
                                    }}
                                 >
                                    {/* @ts-ignore */}
                                    <ion-icon name="caret-forward-circle"></ion-icon>
                                 </button>

                                 <button
                                    type='button'
                                    onClick={() => {
                                       if (y === 0) return;
                                       setY(prev => prev - 1);
                                    }}
                                    style={{
                                       fontSize: "48px",
                                       background: "none",
                                       border: "none",
                                       color: colorMode ? palDark[0] : palLight[5],
                                    }}
                                 >
                                    {/* @ts-ignore */}
                                    <ion-icon name="caret-up-circle"></ion-icon>
                                 </button>

                                 <button
                                    type='button'
                                    onClick={() => {
                                       if (y === upperBoundY) return;
                                       setY(prev => prev + 1);
                                    }}
                                    style={{
                                       fontSize: "48px",
                                       background: "none",
                                       border: "none",
                                       color: colorMode ? palDark[0] : palLight[5],
                                    }}
                                 >
                                    {/* @ts-ignore */}
                                    <ion-icon name="caret-down-circle"></ion-icon>
                                 </button>

                                 <button
                                    style={{
                                       border: "none",
                                       background: "none",
                                       fontSize: "48px",
                                       color: colorMode ? palDark[0] : palLight[5],
                                    }}
                                    type='button'
                                    onClick={
                                       () => {
                                          zoomOut()
                                       }
                                    }
                                 >
                                    {/* @ts-ignore */}
                                    <ion-icon name="remove-circle"></ion-icon>
                                 </button>

                                 <button
                                    style={{
                                       border: "none",
                                       background: "none",
                                       fontSize: "48px",
                                       color: colorMode ? palDark[0] : palLight[5],
                                    }}
                                    type='button'
                                    onClick={
                                       () => {
                                          zoomIn()
                                       }
                                    }
                                 >
                                    {/* @ts-ignore */}
                                    <ion-icon name="add-circle"></ion-icon>
                                 </button>

                              </div>

                              <div
                                 style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    color: colorMode ? palDark[0] : palLight[5],
                                    fontFamily: 'body',
                                    width: '75%',
                                    paddingBottom: '8px'
                                 }}
                              >
                                 <p>x: {x}</p>
                                 <p>y: {y}</p>
                                 <p>z: {z}</p>

                              </div>



                           </div>

                        </div>

                        <div
                           style={{
                              width: '50%',
                              minWidth: '500px',
                              maxWidth: '900px',
                              padding: '32px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                           }}
                        >

                           {renderGridUI()}

                           <div
                              style={{
                                 display: "flex",
                                 alignItems: "center",
                                 gap: "16px",
                              }}
                           >

                              <h2
                                 style={{
                                    color: colorMode ? palDark[2] : palLight[5],
                                    fontFamily: 'subHeader'
                                 }}
                              >Image Date: {t}</h2>


                              <button
                                 style={{
                                    border: "none",
                                    background: "none",
                                    fontSize: "48px",
                                    color: colorMode ? palDark[0] : palLight[5],
                                 }}
                                 type='button'
                                 onClick={
                                    () => {
                                       removeDay();
                                    }
                                 }
                              >
                                 {/* @ts-ignore */}
                                 <ion-icon name="remove-circle"></ion-icon>
                              </button>

                              <button
                                 style={{
                                    border: "none",
                                    background: "none",
                                    fontSize: "48px",
                                    color: colorMode ? palDark[0] : palLight[5],
                                 }}
                                 type='button'
                                 onClick={
                                    () => {
                                       addDay()
                                    }
                                 }
                              >
                                 {/* @ts-ignore */}
                                 <ion-icon name="add-circle"></ion-icon>
                              </button>

                           </div>


                        </div>


                     </div>



                  </div>

                  {/* conent area ^*/}


                  <Footer />




               </div>
               {/* content box ^*/}


            </div>

         </>
      )
   }


   return (
      <>
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
      </>
   )
}

export default GibsPage;