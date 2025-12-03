import { useColorMode } from "../context/ColorModeContext";
import { edits, designs, programs } from "../context/useContent";
import { useNavigate } from "react-router-dom";

function SideBarNav() {
   const { sideBar, colorMode, palLight, falseSB } = useColorMode();
   const nav = useNavigate();

   function editLinkDisplay() {

    return(
      <>
        <button
            type='button'
            className='sidebarLink'
            onClick={() => { falseSB(); nav('/edits')}}
            style={{
              fontFamily: "subheader",
              fontSize: "24px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "16px",
              whiteSpace: "nowrap",
            }}
          >

            Edits

        </button>

        {edits.map(edit => (
          <button
            key={edit.ref}
            type='button'
            className='sidebarLink'
            onClick={() => { falseSB(); nav(`/edits#${edit.ref}`)}}
            style={{
              fontFamily: "body",
              fontSize: "9px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "8px",
              whiteSpace: "nowrap",
            }}
          >
            {edit.title}
        </button>
        ))}
      </>
    )
   }

   function designLinkDisplay() {

    return(
      <>
        <button
            type='button'
            className='sidebarLink'
            onClick={() => { falseSB(); nav('/deisgn')}}
            style={{
              fontFamily: "subheader",
              fontSize: "24px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "16px",
              whiteSpace: "nowrap",
            }}
          >

            Design

        </button>

        {designs.map(design => (
          <button
            key={design.ref}
            type='button'
            className='sidebarLink'
            onClick={() => { falseSB(); nav(`/design#${design.ref}`)}}
            style={{
              fontFamily: "body",
              fontSize: "9px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "8px",
              whiteSpace: "nowrap",
            }}
          >
            {design.title}
        </button>
        ))}
      </>
    )
   }

   function codeLinkDisplay() {

    return(
      <>
        <button
            type='button'
            className='sidebarLink'
            onClick={() => { falseSB(); nav('/code')}}
            style={{
              fontFamily: "subheader",
              fontSize: "24px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "16px",
              whiteSpace: "nowrap",
            }}
          >

            Programming

        </button>

        {programs.map(program => (
          <button
            key={program.ref}
            type='button'
            className='sidebarLink'
            onClick={() => { falseSB(); nav(`/code#${program.ref}`)}}
            style={{
              fontFamily: "body",
              fontSize: "9px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "8px",
              whiteSpace: "nowrap",
            }}
          >
            {program.title}
        </button>
        ))}
      </>
    )
   }

   return (

      <div
            style={{
              display: "flex",
              width: sideBar ? "300px" : "0px",
              backgroundColor: colorMode ? "black" : "white",
              minHeight: "calc(100vh - 128px)",
              overflow: "hidden",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: sideBar ? "8px" : "0px",
            }}
          >
            {editLinkDisplay()}
            {designLinkDisplay()}
            {codeLinkDisplay()}
          </div>
   )
};

export default SideBarNav;