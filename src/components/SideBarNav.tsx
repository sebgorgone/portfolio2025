import { useColorMode } from "../context/ColorModeContext";

function SideBarNav() {
   const { sideBar, colorMode } = useColorMode()

   return (

      <div
            style={{
              display: "flex",
              width: sideBar ? "300px" : "0px",
              backgroundColor: colorMode ? "black" : "white",
              minHeight: "calc(100vh - 128px)",
              overflow: "hidden",
              alignItems: "flex-end",
              padding: sideBar ? "8px" : "0px",
            }}
          >
          </div>
   )
};

export default SideBarNav;