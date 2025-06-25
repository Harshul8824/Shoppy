import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Correct import for createRoot

import './index.css';
import App from './App';

import { ContextProvider } from './contexts/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);

