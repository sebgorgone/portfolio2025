import type { CSSProperties } from "react";
import { useColorMode } from "../context/ColorModeContext";
import { useNavigate } from "react-router-dom";

function HeaderNav() {

   const { palDark, palLight, bs, colorMode, toggleCM, toggleSB } = useColorMode()

   const nav = useNavigate()

   const headerStyle: CSSProperties = {
      width: "100%",
      height: "128px",
      display: "flex",
      justifyContent: "space-between",
      background: colorMode ? palDark[5] : palLight[0],
      borderBottom: colorMode ? `solid 4px ${palDark[4]}` : `solid 4px ${palLight[3]}`,
      boxShadow: bs,
      position: "fixed",
      zIndex: 10,
      alignItems: "center"
   }

   function navDiv() {
      if (colorMode) return (
         <div
            style={{
               display: "flex",
               alignItems: "center"
            }}
         >

            <button
               style={{background: "none", border: "none"}}
               type='button'
               onClick={() => toggleSB()}
            >
               {/* @ts-ignore */}
               <ion-icon
               style={{
                  fontSize: "64px",
                  marginLeft: "32px",
                  color: "white"
               }} 
                  name="menu"
                  //@ts-ignore
                  ></ion-icon>

            </button>


            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/home') }}
            >

               <img
                  className="def"
                  src='svg/home-icon-black.svg'
               />

               <img
                  className="hov"
                  src='svg/home-icon.svg'
               />
            </button>

            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/edits') }}
            >

               <img
                  className="def"
                  src='svg/edits-icon-black.svg'
               />

               <img
                  className="hov"
                  src='svg/edits-icon.svg'
               />
            </button>

            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/design') }}
            >

               <img
                  className="def"
                  src='svg/design-icon-black.svg'
               />

               <img
                  className="hov"
                  src='svg/design-icon.svg'
               />
            </button>

            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/code') }}
            >

               <img
                  className="def"
                  src='svg/code-icon-black.svg'
               />

               <img
                  className="hov"
                  src='svg/code-icon.svg'
               />
            </button>

         </div>
      )

      return (
         <div
            style={{
               display: "flex",
               alignItems: "center"
            }}
         >

            <button
               style={{background: "none", border: "none"}}
               type='button'
               onClick={() => toggleSB()}
            >
               {/* @ts-ignore */}
               <ion-icon
               style={{
                  fontSize: "64px",
                  marginLeft: "32px",
                  color: "black",
               }} 
                  name="menu"
                  //@ts-ignore
                  ></ion-icon>

            </button>



            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/home') }}
            >
               <img
                  className="def"
                  src='svg/home-icon.svg'
               />

               <img
                  className="hov"
                  src='svg/home-icon-black.svg'
               />
            </button>

            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/edits') }}
            >
               <img
                  className="def"
                  src='svg/edits-icon.svg'
               />

               <img
                  className="hov"
                  src='svg/edits-icon-black.svg'
               />
            </button>

            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/design') }}
            >
               <img
                  className="def"
                  src='svg/design-icon.svg'
               />

               <img
                  className="hov"
                  src='svg/design-icon-black.svg'
               />
            </button>

            <button
               className='navButton'
               type='button'
               onClick={() => { nav('/code') }}
            >
               <img
                  className="def"
                  src='svg/code-icon.svg'
               />

               <img
                  className="hov"
                  src='svg/code-icon-black.svg'
               />
            </button>

         </div>
      )
   }




   return (
      <>
         <div
            style={headerStyle}
         >

            {navDiv()}


            <div
               style={{
                  display: "flex",
                  alignItems: "center",
               }}
            >
               <h1
                  style={{
                     fontFamily: "title",
                     color: colorMode ? palDark[2] : palLight[5],
                     fontSize: "34px"
                  }}
               >Sebastian Gorgone</h1>

               <label className="switch">
                  <input type="checkbox" checked={colorMode} onChange={() => { toggleCM() }} />
                  <span className="slider round"></span>
               </label>
            </div>

         </div>
      </>
   )
}

export default HeaderNav