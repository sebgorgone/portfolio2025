import { useColorMode } from "../context/ColorModeContext";

type designType = {
   title: string,
   format: string,
   description: string,
   meta: string,
   path: string | multipleTypes[],
   ref: string,
   mediaType: string,
}

interface multipleTypes {
   url: string,
   type : string
}

type design = {
   design: designType
}

function DesignComponentMobile(props: design) {
   const { colorMode, palDark, palLight, bs } = useColorMode();
   const { title, format, description, meta, path, ref, mediaType } = props.design;

   function portraitFormat() {

      return (
         <div
            id={ref}
            style={{
               display: "flex",
               width: "90%",
               background: colorMode ? "black" : "white",
               boxShadow: bs,
               marginBottom: "48px",
               flexDirection: "column",
               padding: "8px",
               borderTop: colorMode ? `solid 8px ${palDark[3]}` : `solid 8px ${palLight[3]}`,
            }}
         >
            <div
               style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-end"
               }}
            >
               <h1
                  style={{
                     fontSize: "16px",
                     color: colorMode ? palDark[0] : palLight[5],
                     fontFamily: 'title',
                  }}
               >{title}</h1>

               <h3
                  style={{
                     fontSize: "8px",
                     color: colorMode ? palDark[0] : palLight[5],
                     fontFamily: 'subheader',
                  }}
               >{meta}</h3>

            </div>

            <div
               style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "8px",
                  marginBottom: "16px",
               }}
            >

               <div
                  style={{
                     display: "flex",
                     width: "50%",
                     justifyContent: "center",
                     alignItems: "center",
                     fontFamily: "body",
                     color: colorMode ? palDark[0] : palLight[5],
                     textAlign: "center",
                     fontSize: "12px"
                  }}
               >{description}</div>


               <div
                  style={{
                     display: "flex",
                     width: "50%",
                     justifyContent: "center",
                     alignItems: "center"
                  }}
               >

                  {mediaType === 'video' ?
                     <video
                        //@ts-ignore
                        src={path}
                        loop
                        muted
                        autoPlay
                        controls
                        style={{
                           width: "80%",
                           borderRadius: "12px",
                           boxShadow: bs
                        }}
                     />
                     :
                     <img
                        //@ts-ignore
                        src={path}
                        alt={description}
                        style={{
                           width: "50%",
                           borderRadius: "12px",
                           boxShadow: bs
                        }}
                     />
                  }


               </div>


            </div>

         </div>
      )
   }

   function landscapeFormat() {

      return (
         <div
            id={ref}
            style={{
               display: "flex",
               width: "90%",
               background: colorMode ? "black" : "white",
               boxShadow: bs,
               marginBottom: "48px",
               flexDirection: "column",
               padding: "8px",
               borderTop: colorMode ? `solid 8px ${palDark[3]}` : `solid 8px ${palLight[3]}`,
            }}
         >
            <div
               style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-end"
               }}
            >
               <h1
                  style={{
                     fontSize: "16px",
                     color: colorMode ? palDark[0] : palLight[5],
                     fontFamily: 'title',
                  }}
               >{title}</h1>

               <h3
                  style={{
                     fontSize: "8px",
                     color: colorMode ? palDark[0] : palLight[5],
                     fontFamily: 'subheader',
                  }}
               >{meta}</h3>

            </div>

            <div
               style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "8px",
                  marginBottom: "16px",
                  justifyContent: "center"
               }}
            >


               {mediaType === 'video' ?
                  <video
                     //@ts-ignore
                     src={path}
                     loop
                     muted
                     autoPlay
                     controls
                     style={{
                        width: "70%",
                        borderRadius: "12px",
                        boxShadow: bs
                     }}
                  />
                  :
                  <img
                     //@ts-ignore
                     src={path}
                     style={{
                        width: "70%",
                        borderRadius: "12px",
                        boxShadow: bs
                     }}
                  />
               }


            </div>

            <div
               style={{
                  width: "100%",
                  padding: "24px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontFamily: "body",
                  color: colorMode ? palDark[0] : palLight[5],
                  fontSize: "12px"

               }}
            >

               {description}

            </div>

         </div>
      )
   }
   function multipleFormat() {

      return (
         <div
            id={ref}
            style={{
               display: "flex",
               width: "90%",
               background: colorMode ? "black" : "white",
               boxShadow: bs,
               marginBottom: "48px",
               flexDirection: "column",
               padding: "8px",
               borderTop: colorMode ? `solid 8px ${palDark[3]}` : `solid 8px ${palLight[3]}`,
            }}
         >
            <div
               style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-end"
               }}
            >
               <h1
                  style={{
                     fontSize: "16px",
                     color: colorMode ? palDark[0] : palLight[5],
                     fontFamily: 'title',
                  }}
               >{title}</h1>

               <h3
                  style={{
                     fontSize: "8px",
                     color: colorMode ? palDark[0] : palLight[5],
                     fontFamily: 'subheader',
                  }}
               >{meta}</h3>

            </div>

            <div
               style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "8px",
                  marginBottom: "16px",
                  padding: "8px",
                  justifyContent: "center", 
                  gap: "16px"
               }}
            >

               {/* @ts-ignore */}
               {path.map((p, i) => (p.type === 'video' ?
                  <video
                     key={i}
                     //@ts-ignore
                     src={p.url}
                     loop
                     muted
                     autoPlay
                     controls
                     style={{
                        width:`calc((100% / ${path.length} - 16px))`,
                        borderRadius: "12px",
                        boxShadow: bs
                     }}
                  />
                  :
                  <img
                     key={i}
                     //@ts-ignore
                     src={p.url}
                     style={{
                        width:`calc((100% / ${path.length} - 24px))`,
                        borderRadius: "12px",
                        boxShadow: bs
                     }}
                  />
               ))}


            </div>

            <div
               style={{
                  width: "100%",
                  padding: "24px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontFamily: "body",
                  color: colorMode ? palDark[0] : palLight[5],
                  fontSize: "12px"

               }}
            >

               {description}

            </div>

         </div>
      )
   }


   if (format === 'portrait') return portraitFormat();

   if (format === 'landscape') return landscapeFormat();

   if (format == 'multiple') return multipleFormat();
}

export default DesignComponentMobile;