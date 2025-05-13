
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ScrollToTop } from './utils/ScrollToTop.tsx'

createRoot(document.getElementById("root")!).render(
  <>
    <ScrollToTop />
    <App />
  </>
);
