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
              backgroundColor: colorMode ? "black" : "white",
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
                justifyContent: "center",
                gap: "48px",
                width: "100%",
                padding: "48px"
              }}
            >
              {/*card 1*/}
              <div
                style={{
                  display: "flex",
                  flex: 1,
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


                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >

                    <h2
                      style={{
                        display: "flex",
                        fontFamily: "title",
                        color: colorMode ? palDark[0] : palLight[5],
                        marginBottom: "8px",
                        marginTop: "4px",
                        textAlign: "center",
                      }}
                    >Collegiate Skydive Nationals</h2>

                  </div>



                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <video
                      src="https://res.cloudinary.com/djuul0yr0/video/upload/v1720000000/Collegiates2024EditCOMPR_skypfr.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      style={{
                        width: "36%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: bs
                      }}
                    />

                  </div>



                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >

                    <p
                      style={{
                        display: "flex",
                        fontFamily: "body",
                        color: colorMode ? palDark[0] : palLight[5],
                        marginTop: "8px",
                      }}
                    >Collegiates Z-Hills 2024</p>

                  </div>




                </div>
              </div>


              {/* card 2 */}
              <div
                style={{
                  display: "flex",
                  flex: 1,
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
                    width: "100%",
                    flexGrow: 1,
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
                          src='svg/design-icon-black.svg'
                          style={{
                            width: "48px",
                            height: "48px"
                          }}
                        />

                        <img
                          className="hov"
                          src='svg/design-icon.svg'
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
                          src='svg/design-icon.svg'
                          style={{
                            width: "48px",
                            height: "48px"
                          }}
                        />

                        <img
                          className="hov"
                          src='svg/design-icon-black.svg'
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
                    >Graphic Design</h3>


                  </div>


                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >

                    <h2
                      style={{
                        display: "flex",
                        fontFamily: "title",
                        color: colorMode ? palDark[0] : palLight[5],
                        marginBottom: "8px",
                        marginTop: "4px",
                        textAlign: "center"
                      }}
                    >Adobe Illustrator Design</h2>

                  </div>



                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <img 
                      src='designs/illustrator/imadethisinalecture.png'
                      style={{width: "70%", boxShadow: bs}}
                    />

                  </div>



                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >

                    <p
                      style={{
                        display: "flex",
                        fontFamily: "body",
                        color: colorMode ? palDark[0] : palLight[5],
                        marginTop: "8px",
                      }}
                    >Ellington SkydiveCT 2023</p>

                  </div>




                </div>
              </div>

              {/* card 3 */}
              <div
                style={{
                  display: "flex",
                  flex: 1,
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
                          src='svg/code-icon-black.svg'
                          style={{
                            width: "48px",
                            height: "48px"
                          }}
                        />

                        <img
                          className="hov"
                          src='svg/code-icon.svg'
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
                          src='svg/code-icon.svg'
                          style={{
                            width: "48px",
                            height: "48px"
                          }}
                        />

                        <img
                          className="hov"
                          src='svg/code-icon-black.svg'
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
                    >Programming</h3>


                  </div>


                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >

                    <h2
                      style={{
                        display: "flex",
                        fontFamily: "title",
                        color: colorMode ? palDark[0] : palLight[5],
                        marginBottom: "8px",
                        marginTop: "4px",
                      }}
                    >JS 'blockblast'</h2>

                  </div>



                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <iframe 
                      style={{
                        border: "none",
                        boxShadow: bs,
                        width: "70%",
                        height: "200px",
                      }}
                      src='https://sebgorgone.github.io/js-blockblast/'
                    />

                  </div>



                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >

                    <p
                      style={{
                        display: "flex",
                        fontFamily: "body",
                        color: colorMode ? palDark[0] : palLight[5],
                        marginTop: "8px",
                      }}
                    >Blockblast clone made with p5.js</p>

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
