import { useColorMode } from "../context/ColorModeContext";

type editType = {
   title: string,
   format: string,
   description: string,
   meta: string,
   link: string,
   ref: string
}

type edit = {
   edit: editType
}

function EditComponentMobile(props: edit) {
   const { colorMode, palDark, palLight, bs } = useColorMode();
   const { title, format, description, meta, link, ref } = props.edit;

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
               borderTop: `solid 8px ${palLight[4]}`,
            }}
         >
            <div
               style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start"
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
                     fontSize: "8px"
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

                  <video
                      src={link}
                      loop
                      muted
                      playsInline
                      controls
                      style={{
                        width: "50%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: bs
                      }}
                    />


               </div>


            </div>

         </div>
      )
   }


   return (
      format === 'portrait' ? portraitFormat() : ''
   )
}

export default EditComponentMobile;