import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default function Example() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Bienvenue sur mon portfolio</h1>
      <button className="btn btn-success">Voir mes projets</button>
    </div>
  );
}
