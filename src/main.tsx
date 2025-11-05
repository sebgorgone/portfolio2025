import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from './context/ColorModeContext.tsx'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <HashRouter>
        <Routes>

          <Route path='/' element={<Navigate to='/home' />} />

          <Route path='/home' element={<Home />} />


        </Routes>
      </HashRouter>
    </ColorModeProvider>
  </StrictMode>,
)
