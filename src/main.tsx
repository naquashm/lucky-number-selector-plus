
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Declare AdSense global variable
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

// Initialize AdSense
window.adsbygoogle = window.adsbygoogle || [];

createRoot(document.getElementById("root")!).render(<App />);
