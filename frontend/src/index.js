import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  React.useEffect(() => {
    // Redirect to the static HTML app
    window.location.href = '/app.html';
  }, []);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#0F0F0F',
      color: '#FFCC00',
      fontFamily: 'sans-serif'
    }}>
      Carregando Tiger Rentank...
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
