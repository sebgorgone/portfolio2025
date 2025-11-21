import type { CSSProperties } from "react";
import { useColorMode } from "../context/ColorModeContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { programs, designs, edits } from "../context/useContent";

type ResultType = {
   title: string[],
   description: string[] | null,
   location: string
}

function HeaderNav() {

   const { palDark, palLight, bs, colorMode, toggleCM, toggleSB, falseSB } = useColorMode()

   const nav = useNavigate();

   const [searchBar, setSearchBar] = useState<boolean>(false);
   const [wildCard, setWildCard] = useState<string>('');
   const [searchResults, setSearchResults] = useState<ResultType[] | []>([]);

   const inputRef = useRef<HTMLInputElement | null>(null);
   const searchDisplayRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            inputRef.current &&
            !inputRef.current.contains(event.target as Node) &&
            searchDisplayRef.current &&
            !searchDisplayRef.current.contains(event.target as Node)
         ) {
            setWildCard('');
         }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [searchResults]);

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
      alignItems: "center",
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
               className="navButton"
               style={{ background: "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "32px", boxShadow: 'none' }}
               type='button'
               onClick={() => toggleSB()}
            >
               {/* @ts-ignore */}
               <ion-icon
                  style={{
                     fontSize: "64px",
                     color: "white"
                  }}
                  name="menu"
               //@ts-ignore
               ></ion-icon>

               <h3
                  style={{
                     color: palDark[2],
                  }}
                  className='buttonTitle'
               >
                  menu
               </h3>

            </button>


            <button
               className='navButton'
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
                  }}
                  className='buttonTitle'
               >
                  home
               </h3>

            </button>

            <button
               className='navButton'
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
                  }}
                  className='buttonTitle'
               >
                  edits
               </h3>

            </button>

            <button
               className='navButton'
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
                  }}
                  className='buttonTitle'
               >
                  designs
               </h3>

            </button>

            <button
               className='navButton'
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
                  }}
                  className='buttonTitle'
               >
                  code
               </h3>

            </button>

            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '48px'
               }}
            >

               <h3
                  style={{
                     fontFamily: 'body',
                     color: colorMode ? palDark[2] : 'black',
                  }}
               >{colorMode ? 'Dark' : 'Light'}</h3>

               <label className="switch">
                  <input type="checkbox" checked={colorMode} onChange={() => { toggleCM() }} />
                  <span className="slider round"></span>
               </label>

            </div>

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
               className='navButton'
               style={{ background: "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "32px", boxShadow: "none" }}
               type='button'
               onClick={() => toggleSB()}
            >
               {/* @ts-ignore */}
               <ion-icon
                  style={{
                     fontSize: "64px",
                     color: "black",
                  }}
                  name="menu"
               //@ts-ignore
               ></ion-icon>

               <h3 className='buttonTitle' style={{ color: "black" }}>menu</h3>

            </button>



            <button
               className='navButton'
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

               <h3 className='buttonTitle' style={{ color: "black" }}>home</h3>

            </button>

            <button
               className='navButton'
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

               <h3 className='buttonTitle' style={{ color: "black" }}>edits</h3>

            </button>

            <button
               className='navButton'
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

               <h3 className='buttonTitle' style={{ color: "black" }}>design</h3>

            </button>

            <button
               className='navButton'
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

               <h3 className='buttonTitle' style={{ color: "black" }}>code</h3>

            </button>

            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '48px'
               }}
            >

               <h3
                  style={{
                     fontFamily: 'body',
                     color: colorMode ? palDark[2] : 'black',
                  }}
               >{colorMode ? 'Dark' : 'Light'}</h3>


               <label className="switch">
                  <input type="checkbox" checked={colorMode} onChange={() => { toggleCM() }} />
                  <span className="slider round"></span>
               </label>


            </div>

         </div>
      )
   }

   function renderResults() {
      if (searchResults.length === 0) return

      return (
         <>
            <div
               ref={searchDisplayRef}
               style={{
                  display: "flex",
                  position: "fixed",
                  right: 0,
                  top: 126,
                  width: "400px",
                  zIndex: 8,
                  background: colorMode ? palDark[5] : "white",
                  boxShadow: bs,
                  padding:"8px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px"
               }}
            >

               {searchResults.map((r, i) => (
                  <button
                     style={{
                        width: '100%',
                        background: colorMode ? palDark[1] : palLight[1],
                        color: colorMode ? palDark[0] : 'black',
                        fontFamily: 'body',
                        padding: '8px',
                        borderRadius: '4px',
                        textAlign: 'left',
                        border: 'none'

                     }}
                     key={i}
                     type='button'
                     onClick={() => { falseSB(); nav(r.location)}}
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

      setSearchResults(results);


   }, [wildCard]);




   return (
      <>
         {renderResults()}
         <div
            style={headerStyle}
         >

            {navDiv()}


            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: 'row-reverse'
               }}
            >
               <h1
                  style={{
                     fontFamily: "title",
                     color: colorMode ? palDark[2] : palLight[5],
                     fontSize: "34px",
                     padding: searchBar ? '0px' : '8px',
                     width: searchBar ? '0px' : '368px',
                     transition: '400ms',
                     overflow: 'hidden',
                     whiteSpace: 'nowrap'
                  }}
               >Sebastian Gorgone</h1>

               <input
                  ref={inputRef}
                  type='text'
                  placeholder={searchBar ? 'Search...' : ''}
                  value={wildCard}
                  onChange={e => setWildCard(e.target.value)}
                  style={{
                     fontFamily: "subtext",
                     fontSize: '16px',
                     height: '32px',
                     borderRadius: '8px',
                     overflow: 'hidden',
                     padding: searchBar ? '8px' : '0px',
                     width: searchBar ? '364px' : '0px',
                     border: searchBar ? `solid 2px ${colorMode ? palDark[2] : 'black'}` : 'none',
                     transition: '400ms',
                     marginRight: '8px',
                     backgroundColor: colorMode ? palDark[5] : 'white',
                     color: colorMode ? palDark[2] : 'black'
                  }}
               />

               <button
                  className='navButton'
                  style={{ width: '32px', height: '32px', boxShadow: 'none' }}
                  onClick={() => {
                     setSearchBar(prev => {
                        const next = !prev;
                        if (!prev && inputRef.current) {
                           setTimeout(() => inputRef.current?.focus(), 0);
                        }
                        return next;
                     });
                  }}
               >
                  {/* @ts-ignore */}
                  <ion-icon style={{ fontSize: '32px', color: colorMode ? 'white' : 'black' }} name="search"></ion-icon>
               </button>

            </div>


         </div>
      </>
   )
}

export default HeaderNav