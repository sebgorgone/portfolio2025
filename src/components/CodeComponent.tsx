import { useNavigate } from "react-router-dom";
import { useColorMode } from "../context/ColorModeContext";

type project = {
   title: string,
   description: string,
   meta: string,
   page: string,
   ref: string,
   mediaLink: string,
   referenceLinks: referenceLink[],
}

type props = {
   project: project,
}

interface referenceLink {
   title: string,
   url: string,
}

function CodeComponent(props: props) {

   const { title, description, meta, page, ref, mediaLink, referenceLinks } = props.project;

   const { bs, palDark, palLight, colorMode, falseSB } = useColorMode()

   const nav = useNavigate();



   return (
      <>
         <button
            type='button'
            id={ref}
            style={{
               width: "90%",
               maxWidth: "1400px",
               display: "flex",
               backgroundColor: colorMode ? "black" : "white",
               border: "none",
               borderLeft: `solid 8px ${colorMode ? palDark[4] : palLight[4]}`,
               boxShadow: bs,
            }}
            onClick={() => { falseSB(); nav(page) }}
            className='codeProjButton'
         >
            <div
               style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  padding: "8px"
               }}
            >
               <div
                  style={{
                     display: "flex",
                     width: "100%",
                     justifyContent: "space-between",
                     color: colorMode ? palDark[0] : palLight[5],
                  }}
               >
                  <h1
                     style={{
                        fontFamily: "title"
                     }}
                  >{title}</h1>
                  <p
                     style={{
                        fontFamily: "subHeader"
                     }}
                  >{meta}</p>
               </div>
               <div
                  style={{
                     display: "flex",
                     width: "100%",
                     justifyContent: "flex-start",
                     color: colorMode ? palDark[0] : palLight[5],
                     fontFamily: "body",
                     fontSize: "32px",
                     marginTop: "64px"
                  }}
               >{description}</div>

               <div
                  style={{
                     width: "100%",
                     alignItems: "flex-start",
                  }}
               >hello hello hello</div>
            </div>

            <img 
               style={{
                  width: "30%",
                  aspectRatio: "1 / 1",
               }}
               src={mediaLink}
               alt={title}
            />

         </button>
      </>
   )
}

export default CodeComponent