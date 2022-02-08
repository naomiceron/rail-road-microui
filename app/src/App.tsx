import React from 'react';
import logo from './logo.svg';
import './App.css';

const RemoteButton = React.lazy(() => import("table/components/Button"));
function App() {
  return (
    <div className="App">
      <h1>App Host</h1>
      <React.Suspense fallback="Button">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
}

export default App;
