import { useColorMode } from "./context/ColorModeContext"
import { useViewportSize } from "./context/useViewport"
import { useState, useEffect } from "react";
import HeaderNav from "./components/HeaderNav";


function Home() {
  const { colorMode, palDark, palLight, sideBar, bs } = useColorMode();

  console.log(sideBar)

  const { width } = useViewportSize()

  function deviceParams() {
    if (width > 1024) return 'desktop'
    return 'mobile'
  }

  const [deviceType, setDeviceType] = useState<string>(deviceParams())

  useEffect(() => {
    setDeviceType(deviceParams)
  }, [width]);

  function desktopLayout() {
    return (
      <>

        <HeaderNav />
        <div
          style={{
            paddingTop: "128px",
            display: "flex",
            minHeight: "calc(100vh - 128px)",
            backgroundColor: "none",
            width: "100%",
            zIndex: 1,
          }}
        >

          {/* sidebar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: sideBar ? "300px" : "0px",
              backgroundColor: "white",
              minHeight: "calc(100vh - 128px)",
              overflow: "hidden",
              alignItems: "flex-end",
              padding: sideBar ? "8px" : "0px",
            }}
          >
          </div>





          {/* contentbox */}
          <div
            style={{
              display: "flex",
              flex: 1
            }}
          >


            <div
              style={{
                display: "flex",
                flex: 1,
                height: "400px"
              }}
            >
              //p5
            </div>


            {/* three pages preview */}
            <div
              style={{
                display: "flex",
                marginTop: "48px",
                justifyContent: "center",
                gap: "48px",
                width: "100%"
              }}
            >

              <div
                style={{
                  display: "flex",
                  flexGrow: 1,
                  height: '512px',
                  backgroundColor:colorMode ? palDark[5] : "white",
                  maxWidth: "512px",
                  boxShadow: bs
                }}
              >



              </div>



            </div>


          </div>

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

export default Home
