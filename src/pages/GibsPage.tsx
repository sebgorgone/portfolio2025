import { useColorMode } from "../context/ColorModeContext";
import { useViewportSize } from "../context/useViewport";
import SideBarNav from "../components/SideBarNav";
import HeaderNav from "../components/HeaderNav";
import { useState, useEffect } from "react";
import { data } from "react-router-dom";

function GibsPage() {

   const { colorMode, palLight, palDark, bs } = useColorMode();
   const { deviceType } = useViewportSize();


   const [x, setX] = useState(0);

   const [y, setY] = useState(0);

   const [z, setZ] = useState(0);

   const [t, setT] = useState(new Date().toISOString().split('T')[0])

   const [upperBoundX, setUpperBoundX] = useState(0);

   const [upperBoundY, setUpperBoundY] = useState(0);

   const [newX, setNewX] = useState(0);

   const [newY, setNewY] = useState(0);

   const [newT, setNewT] = useState()



   const tileUrl = `${"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best"}/MODIS_Terra_CorrectedReflectance_TrueColor/default/${t}/${"GoogleMapsCompatible_Level9"}/${z}/${y}/${x}.jpg`;

   useEffect(() => {
      const bound = Math.pow(2, z) - 1;
      setUpperBoundX(bound);
      setUpperBoundY(bound);
   }, [z]);

   const zoomIn = () => {
      if (z >= 9) return;
      const gridSize = Math.pow(2, z);
      const newZ = z + 1;
      const newSize = Math.pow(2, newZ);
      const normX = (x + 0.5) / gridSize;
      const normY = (y + 0.5) / gridSize;
      const nextX = Math.floor(normX * newSize);
      const nextY = Math.floor(normY * newSize);
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
      const d = new Date(t);
      d.setDate(d.getDate() + 1);
      setT(d.toISOString().split('T')[0])
   }

   function removeDay() {
      const d = new Date(t);
      d.setDate(d.getDate() - 1);
      setT(d.toISOString().split('T')[0])
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
                                 width: "100%",
                                 boxShadow: bs,
                                 border: 'none',
                                 borderRadius: '5%'
                              }}
                              alt='gibs api image https://nasa-gibs.github.io/gibs-api-docs/'
                              src={tileUrl}
                           />

                           <div></div>

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