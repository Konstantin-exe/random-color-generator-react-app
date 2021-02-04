import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PrintObject from './components/PrintObject';
import Form from './components/Form';

function App() {
  const [hex, setHex] = useState('#000000');
  return (
    <div className="container">
      <Header />

      <Form hex={hex} setHex={setHex} />

      <PrintObject hex={hex} />
    </div>
  );
}

export default App;
