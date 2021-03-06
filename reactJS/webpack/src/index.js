import React from 'react';
import App from './containers/App';
import { createRoot } from 'react-dom/client';
import "../src/assets/css/style.css";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab="home" />)