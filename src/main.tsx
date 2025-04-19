import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './lib/i18n';
import { inject } from '@vercel/analytics';
if (import.meta.env.PROD) inject();

createRoot(document.getElementById("root")!).render(<App />);
