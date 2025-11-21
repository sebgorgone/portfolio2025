import { useColorMode } from "../context/ColorModeContext";
import { useNavigate } from "react-router-dom";

function MobileNav() {

   const { colorMode, palDark, palLight, toggleCM } = useColorMode();

   const nav = useNavigate();

   const buttonDiv = {
      width: "35%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: 'center'
   }

   function leftButtons() {
      if (colorMode) return (
         <>
            <button
               className='navButtonMobile'
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

               <h3
                  style={{
                     color: palDark[2],
                     fontSize: "12px"
                  }}
                  className='buttonTitle'
               >
                  home
               </h3>

            </button>

            <button
               className='navButtonMobile'
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

               <h3
                  style={{
                     color: palDark[2],
                     fontSize: "12px"
                  }}
                  className='buttonTitle'
               >
                  edits
               </h3>

            </button>
         </>
      )

      return (
         <>
            <button
               className='navButtonMobile'
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

               <h3
                  className='buttonTitle'
                  style={{
                     color: "black",
                     fontSize: "12px"
                  }}
               >home</h3>

            </button>

            <button
               className='navButtonMobile'

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

               <h3
                  className='buttonTitle'
                  style={{
                     color: "black",
                     fontSize: "12px"
                  }}
               >edits</h3>

            </button>
         </>
      )
   }

   function rightButtons() {
      if (colorMode) return (
         <>
            <button
               className='navButtonMobile'
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

               <h3
                  style={{
                     color: palDark[2],
                     fontSize: '12px'
                  }}
                  className='buttonTitle'
               >
                  designs
               </h3>

            </button>

            <button
               className='navButtonMobile'
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

               <h3
                  style={{
                     color: palDark[2],
                     fontSize: '12px'
                  }}
                  className='buttonTitle'
               >
                  code
               </h3>

            </button>
         </>
      )
      return (
         <>
            <button
               className='navButtonMobile'
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

               <h3 
               className='buttonTitle' 
               style={{ 
                  color: "black",
                  fontSize: '12px'
                  }}>
                     design
                  </h3>

            </button>

            <button
               className='navButtonMobile'
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

               <h3 
               className='buttonTitle' 
               style={{ 
                  color: "black",
                  fontSize: '12px'
               }}
               >
                  code
               </h3>

            </button>
         </>
      )
   }

   return (
      <div
         style={{
            width: "100%",
            backgroundColor: colorMode ? palDark[5] : palLight[0],
            position: "fixed",
            bottom: 0,
            height: '86px',
            display: "flex",
            justifyContent: 'space-between',
            zIndex: 10
         }}
      >

         <div
            style={buttonDiv}
         >
            {leftButtons()}
         </div>

         <div
            style={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               width: "20%",
               height: "100%",
               justifyContent: "center"
            }}
         >
            <label className="switch">
                  <input type="checkbox" checked={colorMode} onChange={() => { toggleCM() }} />
                  <span className="slider round"></span>
               </label>
         </div>

         <div
            style={buttonDiv}
         >
            {rightButtons()}
         </div>


      </div>
   )
}

export default MobileNav;
