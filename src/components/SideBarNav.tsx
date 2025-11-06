import { useColorMode } from "../context/ColorModeContext";
import { edits } from "../context/useContent";
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
              fontSize: "32px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "16px"
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
              fontSize: "12px",
              color: colorMode ? "white": palLight[5],
              background: "none",
              border: "none",
              marginBottom: "8px"
            }}
          >
            {edit.title}
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
          </div>
   )
};

export default SideBarNav;