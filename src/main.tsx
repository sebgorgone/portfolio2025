import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from './context/ColorModeContext.tsx'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Home from './Home.tsx'
import VideoEdits from './pages/VideoEdits.tsx';
import DesignPage from './pages/designPage.tsx';
import CodePage from './pages/CodePage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <HashRouter>
        <Routes>

          <Route path='/' element={<Navigate to='/home' />} />

          <Route path='/home' element={<Home />} />

          <Route path='/edits' element={<VideoEdits />} />

          <Route path='/design' element={<DesignPage />} />

          <Route path='/code' element={<CodePage />} />
          
        </Routes>
      </HashRouter>
    </ColorModeProvider>
  </StrictMode>,
)
