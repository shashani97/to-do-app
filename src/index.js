import React from 'react';
import ReactDOM from 'react-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to TO-DO App!</h1>
      <p>sample content.</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
