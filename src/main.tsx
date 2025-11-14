import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from './context/ColorModeContext.tsx'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Home from './Home.tsx'
import VideoEdits from './pages/VideoEdits.tsx';
import DesignPage from './pages/designPage.tsx';
import CodePage from './pages/CodePage.tsx';
import { cloudlog, invitedByNat, tasskManagement } from './context/useContent.ts';
import CodeProjectPage from './pages/CodeProjectPage.tsx';


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


          {/* routes for code project pages */}
          <Route path='/code/ibn' element={<CodeProjectPage title='Invited By Nat' content={invitedByNat} />} />

          <Route path='/code/tassk-management' element={<CodeProjectPage title='Tassk Management' content={tasskManagement}/>} />

          <Route path='/code/cloudlog' element={<CodeProjectPage title='Cloudlog' content={cloudlog}/>} />
          
        </Routes>
      </HashRouter>
    </ColorModeProvider>
  </StrictMode>,
)
