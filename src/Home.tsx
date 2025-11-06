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
            marginBottom: "24px"
          }}
        >

          {/* sidebar */}
          <div
            style={{
              display: "flex",
              width: sideBar ? "300px" : "0px",
              backgroundColor:colorMode ? "black" : "white",
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
              flex: 1,
              flexDirection: "column",

            }}
          >


            <div
              style={{
                position: "relative",
                display: "flex",
                flex: 1,
                height: "400px",
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
                  pointerEvents: "none", // so clicks pass through to iframe
                  zIndex: 2,
                  fontFamily: "title"
                }}
              >
                Sebastian Gorgone
              </div>

              {/* iframe background */}
              <iframe
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
                src={!colorMode ? "turningcubes/p5-light.html" : "turningcubes/p5-dark.html"}
              />
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
              {/*card 1*/}
              <div
                style={{
                  display: "flex",
                  flexGrow: 1,
                  height: '512px',
                  backgroundColor: colorMode ? palDark[5] : "white",
                  maxWidth: "512px",
                  minWidth: "380px",
                  boxShadow: bs,
                  borderTop: `solid 8px ${palLight[4]}`,
                  padding: "8px"
                }}
              >

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%"
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >

                    {colorMode ?
                      <button
                        className='navButton'
                        type='button'
                        onClick={() => { }}
                        style={{
                          width: "48px",
                          height: "48px",
                          marginLeft: "0px"
                        }}
                      >
                        <img
                          className="def"
                          src='svg/edits-icon-black.svg'
                          style={{
                            width: "48px",
                            height: "48px"
                          }}
                        />

                        <img
                          className="hov"
                          src='svg/edits-icon.svg'
                          style={{
                          width: "48px",
                          height: "48px"
                        }}
                        />
                      </button> :
                      <button
                        className='navButton'
                        type='button'
                        onClick={() => { }}
                        style={{
                          width: "48px",
                          height: "48px",
                          marginLeft: "0px"
                        }}
                      >
                        <img
                          className="def"
                          src='svg/edits-icon.svg'
                          style={{
                          width: "48px",
                          height: "48px"
                        }}
                        />

                        <img
                          className="hov"
                          src='svg/edits-icon-black.svg'
                          style={{
                          width: "48px",
                          height: "48px"
                        }}
                        />
                      </button>}


                      <h3
                        style={{
                          display: "flex",
                          fontFamily: "subHeader",
                          color: colorMode ? palDark[1] : palLight[5],
                        }}
                      >Video Editing</h3>


                  </div>


                </div>
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
