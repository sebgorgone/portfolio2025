import { useColorMode } from "./context/ColorModeContext";
import { useViewportSize } from "./context/useViewport";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import SideBarNav from './components/SideBarNav';
import Footer from "./components/Footer";
import MobileHeader from "./mobileComponents/MobileHeader";
import MobileNav from "./mobileComponents/MobileNav";


function Home() {
  const { colorMode, palDark, palLight, bs, falseSB } = useColorMode();

  const { deviceType } = useViewportSize();

  const nav = useNavigate();

  function desktopLayout() {
    return (
      <>

        <HeaderNav />

        <div
          style={{
            position: "fixed",
            top: "128px",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            width: "100vw",
            height: "calc(100vh - 128px)",
            overflow: "hidden",
            zIndex: 1,
          }}
        >

          {/* sidebar v*/}
          <SideBarNav />
          {/* sidebar ^*/}




          {/* contentbox v*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              overflowY: "auto",
              height: "100%",
              scrollbarGutter: "stable",
            }}
          >

            {/* background header v*/}
            <div
              style={{
                display: "flex",
                height: "400px",
                width: "100%"
              }}
            >
              {/* overlayed text */}
              <div
                style={{
                  position: "relative",
                  top: "44%",
                  left: "35%",
                  color: !colorMode ? palLight[3] : palDark[0],
                  fontSize: "48px",
                  fontWeight: 600,
                  textAlign: "center",
                  zIndex: 2,
                  fontFamily: "title",
                  width: 0,
                  whiteSpace: "nowrap"
                }}
              >
                Sebastian Gorgone
              </div>

              {/* iframe background */}
              <iframe
                style={{
                  width: "100%",
                  height: "400px",
                  border: "none",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
                src={!colorMode ? "turningcubes/p5-light.html" : "turningcubes/p5-dark.html"}
              />
            </div>
            {/* background header ^*/}


            {/* three pages preview v*/}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "48px",
                width: "100%",
                padding: "48px"
              }}
            >
              {/* card 1 v*/}
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
                        onClick={() => { falseSB(); nav(`/edits`) }}
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
                        onClick={() => { falseSB(); nav(`/edits`) }}
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
              {/* card 1 ^*/}


              {/* card 2 v*/}
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  height: '512px',
                  backgroundColor: colorMode ? palDark[5] : "white",
                  maxWidth: "512px",
                  minWidth: "380px",
                  boxShadow: bs,
                  borderTop: `solid 8px ${colorMode ? palDark[3] : palLight[3]}`,
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
                        onClick={() => { falseSB(); nav(`/design`) }}
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
                        onClick={() => { falseSB(); nav(`/design`) }}
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
                      src='designs/imadethisinalecture.png'
                      style={{ width: "70%", boxShadow: bs }}
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
              {/* card 2 ^*/}


              {/* card 3 v*/}
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  height: '512px',
                  backgroundColor: colorMode ? palDark[5] : "white",
                  maxWidth: "512px",
                  minWidth: "380px",
                  boxShadow: bs,
                  borderTop: `solid 8px ${colorMode ? palDark[4] : palLight[2]}`,
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
                        onClick={() => { falseSB(); nav(`/code`) }}
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
                        onClick={() => { falseSB(); nav(`/code`) }}
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
              {/* card 3 ^*/}


            </div>
            {/* three pages preview ^*/}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: 'body',
                flexDirection: "column",
                gap: "32px",
                margin: '16px',
                color: colorMode ? palDark[2] : palLight[5],
              }}
            >
              <h1
                style={{
                  fontFamily: 'title',
                  color: colorMode ? palDark[0] : 'black'
                }}
              >About me</h1>

              <p
                style={{
                  width: "60%",
                  textAlign: 'center',
                  fontSize: "30"
                }}>
                My name is Sebastian! I am an undergraduate student at The University of Connecticut. I am studying Digital Media and Design, and im interested in UX/UI design and web development.
              </p>

              <p
                style={{
                  width: "40%",
                  textAlign: 'center',
                  fontSize: "30"
                }}>
                I like to ski, I like to skydive, And I love all things software. Occasionally I like to edit videos together for fun of the things I enjoy doing.
              </p>

            </div>

            <div
              style={{
                display: 'flex',
                width: "100vw",
                justifyContent: "center",
                alignItems: 'center',
                gap: "24px",
                marginBottom: "48px"
              }}
            >
              <img
                style={{
                  borderRadius: "8px",
                  boxShadow: bs,
                  width: "28%"
                }}
                alt='image of me'
                src='home/canopy.jpg'
              />

              <img
                style={{
                  borderRadius: "8px",
                  boxShadow: bs,
                  width: '10.4%',
                }}
                alt='image of me'
                src='home/ski.jpg'
              />

              <img
                style={{
                  borderRadius: "8px",
                  boxShadow: bs,
                  width: '25%'
                }}
                alt='image of me'
                src='home/collegiate.jpg'
              />

            </div>

            <Footer />


          </div>
          {/* contentbox ^*/}

        </div>

      </>
    )
  }

  function mobileLayout() {
    return (
      <>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '124px'
          }}
        >
          <MobileHeader text='Sebastian Gorgone' format='hero' />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "8px",
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            {/* card 1 v*/}
            <div
              style={{
                display: "flex",
                width: '90%',
                height: '512px',
                backgroundColor: colorMode ? palDark[5] : "white",
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
                      onClick={() => { falseSB(); nav(`/edits`) }}
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
                      onClick={() => { falseSB(); nav(`/edits`) }}
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
            {/* card 1 ^*/}


            {/* card 2 v*/}
            <div
              style={{
                display: "flex",
                width: '90%',
                height: '512px',
                backgroundColor: colorMode ? palDark[5] : "white",
                boxShadow: bs,
                borderTop: `solid 8px ${colorMode ? palDark[3] : palLight[3]}`,
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
                      onClick={() => { falseSB(); nav(`/design`) }}
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
                      onClick={() => { falseSB(); nav(`/design`) }}
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
                    src='designs/imadethisinalecture.png'
                    style={{ width: "70%", boxShadow: bs }}
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
            {/* card 2 ^*/}


            {/* card 3 v*/}
            <div
              style={{
                display: "flex",
                width: '90%',
                height: '512px',
                backgroundColor: colorMode ? palDark[5] : "white",
                boxShadow: bs,
                borderTop: `solid 8px ${colorMode ? palDark[4] : palLight[2]}`,
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
                      onClick={() => { falseSB(); nav(`/code`) }}
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
                      onClick={() => { falseSB(); nav(`/code`) }}
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
            {/* card 3 ^*/}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: 'body',
                flexDirection: "column",
                gap: "32px",
                margin: '16px',
                color: colorMode ? palDark[2] : palLight[5],
              }}
            >
              <h1
                style={{
                  fontFamily: 'title',
                  color: colorMode ? palDark[0] : 'black'
                }}
              >About me</h1>

              <p
                style={{
                  width: "80%",
                  textAlign: 'center',
                  fontSize: "16px"
                }}>
                My name is Sebastian! I am an undergraduate student at The University of Connecticut. I am studying Digital Media and Design, and im interested in UX/UI design and web development.
              </p>

              <p
                style={{
                  width: "80%",
                  textAlign: 'center',
                  fontSize: "16px"
                }}>
                I like to ski, I like to skydive, And I love all things software. Occasionally I like to edit videos together for fun of the things I enjoy doing.
              </p>

            </div>

            <div
              style={{
                display: 'flex',
                width: "100vw",
                justifyContent: "center",
                alignItems: 'center',
                gap: "24px",
                marginBottom: "48px"
              }}
            >
              <img
                style={{
                  borderRadius: "8px",
                  boxShadow: bs,
                  width: "35%"
                }}
                alt='image of me'
                src='home/canopy.jpg'
              />

              <img
                style={{
                  borderRadius: "8px",
                  boxShadow: bs,
                  width: '12.5%',
                }}
                alt='image of me'
                src='home/ski.jpg'
              />

              <img
                style={{
                  borderRadius: "8px",
                  boxShadow: bs,
                  width: '30%'
                }}
                alt='image of me'
                src='home/collegiate.jpg'
              />

            </div>

            


          </div>
          
          <Footer />

        </div>
        <MobileNav />
      </>
    )
  }


  return (
    <>

      {deviceType === 'desktop' && desktopLayout()}
      {deviceType === 'mobile' && mobileLayout()}

      {/* background */}
      <div
        style={{
          position: "fixed",
          zIndex: -1,
          backgroundColor: colorMode ? palDark[1] : palLight[1],
          width: "100vw",
          height: "100vh",
          top: 0,
        }}
      ></div>
    </>
  )
}

export default Home
