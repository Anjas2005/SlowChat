import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/alegreya/600.css";
import "@fontsource/alegreya/700.css";

import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";

import "@fontsource/source-code-pro/500.css";

import "./styles/tokens.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
