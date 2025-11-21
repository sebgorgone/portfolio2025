import { useColorMode } from "../context/ColorModeContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { edits, designs, programs } from "../context/useContent";


type ResultType = {
   title: string[],
   description: string[] | null,
   location: string
}

function MobileNav() {

   const { colorMode, palDark, palLight, toggleCM, sideBar, toggleSB, falseSB, bs } = useColorMode();

   const nav = useNavigate();


   const [wildCard, setWildCard] = useState<string>('');
   const [searchResults, setSearchResults] = useState<ResultType[] | []>([]);

   const buttonDiv = {
      width: "35%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: 'center'
   };

   function leftButtons() {
      if (colorMode) return (
         <>
            <button
               className='navButtonMobile'
               type='button'
               onClick={() => { falseSB(); nav('/home') }}
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
               onClick={() => { falseSB(); nav('/edits') }}
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
               onClick={() => { falseSB(); nav('/home') }}
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
               onClick={() => { falseSB(); nav('/edits') }}
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
   };

   function rightButtons() {
      if (colorMode) return (
         <>
            <button
               className='navButtonMobile'
               type='button'
               onClick={() => { falseSB(); nav('/design') }}
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
               onClick={() => { falseSB(); nav('/code') }}
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
               onClick={() => { falseSB(); nav('/design') }}
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
               onClick={() => { falseSB(); nav('/code') }}
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
   };

   function renderResults() {
      if (searchResults.length === 0) return

      return (
         <>
            <div
               style={{
                  display: "flex",
                  width: "100%",
                  zIndex: 8,
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px"
               }}
            >

               {searchResults.map((r, i) => (
                  <button
                     style={{
                        width: '80%',
                        background: colorMode ? palDark[1] : palLight[1],
                        color: colorMode ? palDark[0] : 'black',
                        fontFamily: 'body',
                        padding: '8px',
                        borderRadius: '4px',
                        textAlign: 'left',
                        border: 'none',
                        boxShadow: bs

                     }}
                     key={i}
                     type='button'
                     onClick={() => { falseSB(); nav(r.location) }}
                     className='resultButton'
                  >

                     <h3>
                        {r.title[0]}
                        <span
                           style={{
                              fontFamily: 'subHeader',
                              color: colorMode ? palDark[2] : palLight[5]
                           }}
                        >{r.title[1]}</span>
                        {r.title[2]}
                     </h3>

                     {r.description &&
                        <p>
                           {r.description[0].length > 15 ? `...${r.description[0].slice(r.description[0].length - 15)}` : r.description[0]}
                           <span
                              style={{
                                 fontFamily: 'subHeader',
                                 color: colorMode ? palDark[2] : palLight[5]
                              }}
                           >{r.description[1]}</span>
                           {r.description[2].length > 30 ? `${r.description[2].slice(0, 30)}...` : r.description[2]}
                        </p>}

                  </button>
               ))}

            </div>
         </>
      )

   }



   useEffect(() => {
      if (wildCard === '') return setSearchResults([]);

      function splitToArray(original: string, query: string) {
         const normalized = original.toLowerCase().replace(/\s+/g, '');
         const normalizedQuery = query.toLowerCase().replace(/\s+/g, '');
         const normIndex = normalized.indexOf(normalizedQuery);
         if (normIndex === -1) return [original, '', ''];

         let count = 0;
         let start = 0;

         for (let i = 0; i < original.length; i++) {
            if (original[i] !== ' ') {
               if (count === normIndex) {
                  start = i;
                  break;
               }
               count++;
            }
         };

         count = 0;
         let end = original.length;
         for (let i = 0; i < original.length; i++) {
            if (original[i] !== ' ') {
               if (count === normIndex + normalizedQuery.length) {
                  end = i;
                  break;
               }
               count++;
            }
         };

         const before = original.slice(0, start);
         const match = original.slice(start, end);
         const after = original.slice(end);

         return [
            before,
            match,
            after
         ]


      }

      let pool: ResultType[] = [];
      const normalize = (input: string) => { return input.toLowerCase().replace(/\s+/g, '') };
      const normWild = normalize(wildCard);

      for (const p of programs) {
         const normTitle = normalize(p.title);
         const normDescription = normalize(p.description);
         const normMeta = normalize(p.meta).replace('-', '');

         if (normMeta.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: splitToArray(p.meta, wildCard),
               location: `/code#${p.ref}`
            });
            continue;
         }

         if (normDescription.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: splitToArray(p.description, wildCard),
               location: `/code#${p.ref}`
            });
            continue;
         }

         if (normTitle.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: null,
               location: `/code#${p.ref}`
            });
         }
      }

      for (const p of designs) {
         const normTitle = normalize(p.title);
         const normDescription = normalize(p.description);
         const normMeta = normalize(p.meta);

         if (normMeta.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: splitToArray(p.meta, wildCard),
               location: `/design#${p.ref}`
            });
            continue;
         }

         if (normDescription.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: splitToArray(p.description, wildCard),
               location: `/design#${p.ref}`
            });
            continue;
         }

         if (normTitle.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: null,
               location: `/design#${p.ref}`
            });
         }
      }

      for (const p of edits) {
         const normTitle = normalize(p.title);
         const normDescription = normalize(p.description);
         const normMeta = normalize(p.meta);

         if (normMeta.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: splitToArray(p.meta, wildCard),
               location: `/edits#${p.ref}`
            });
            continue;
         }

         if (normDescription.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: splitToArray(p.description, wildCard),
               location: `/edits#${p.ref}`
            });
            continue;
         }

         if (normTitle.includes(normWild)) {
            pool.push({
               title: splitToArray(p.title, wildCard),
               description: null,
               location: `/edits#${p.ref}`
            });
         }
      }

      const coverage = (inp: string[] | null) => {
         if (inp === null) return 0;
         if ((inp[0].length + inp[1].length + inp[2].length) === 0) return 0;
         return inp[1].length / (inp[0].length + inp[1].length + inp[2].length);
      }

      pool.sort((a, b) =>
         (
            Math.max(coverage(b.title), coverage(b.description))
         )
         -
         (
            Math.max(coverage(a.title), coverage(a.description))
         ));

      let results = []

      for (let i = 0; i < Math.min(pool.length, 6); i++) {
         results.push(pool[i]);
      }

      console.log(pool)

      setSearchResults(results);


   }, [wildCard]);

   function searchMenu() {
      return (
         <div
            style={{
               position: 'fixed',
               bottom: '86px',
               width: '100%',
               height: sideBar ? 'calc(100vh - 86px)' : '0',
               overflow: 'hidden',
               display: 'flex',
               flexDirection: 'column',
               background: colorMode ? palLight[1] : palDark[1],
               opacity: '95%',
               transition: '400ms ease',
               zIndex: 8
            }}
         >
            <div
               style={{
                  width: '100%',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'center'
               }}
            >

               <input
                  style={{
                     width: '90%',
                     backgroundColor: colorMode ? palDark[0] : palLight[1],
                     border: 'none',
                     height: '32px',
                     borderRadius: '16px',
                     color: colorMode ? palDark[5] : palLight[5],
                     padding: '8px',
                     fontFamily: 'body',
                     fontSize: '16px',
                  }}
                  placeholder="Search..."
                  value={wildCard}
                  onChange={e => setWildCard(e.target.value)}
               />


            </div>

            {renderResults()}


         </div>
      )
   }

   return (
      <>
         {searchMenu()}
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
                  height: 'fit-content',
                  justifyContent: "center",
               }}
            >

               <button
                  style={{
                     position: 'relative',
                     width: '56px',
                     minHeight: '56px',
                     borderRadius: '28px',
                     top: '-24px',
                     border: `1px solid ${colorMode ? palDark[0] : 'black'}`,
                     backgroundColor: colorMode ? palDark[5] : palLight[0],
                     boxShadow: bs
                  }}
                  type='button'
                  onClick={() => { setWildCard(''); toggleSB() }}
               >
                  {/* @ts-ignore */}
                  <ion-icon style={{ color: colorMode ? 'white' : 'black', fontSize: '27px', position: 'relative', top: '1px' }} name="search"></ion-icon>

               </button>


               <label className="switch" style={{ position: 'relative', top: '-24px' }}>
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
      </>
   )
}

export default MobileNav;
