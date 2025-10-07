import React, { useState } from 'react';
import '../style.css';

function Base64Converter() {
  const [text, setText] = useState('');
  const [base64, setBase64] = useState('');
  const [error, setError] = useState('');

  const encodeToBase64 = () => {
    try {
      if (!text.trim()) {
        setError('Please enter some text to encode');
        return;
      }
      const encoded = btoa(unescape(encodeURIComponent(text)));
      setBase64(encoded);
      setError('');
    } catch (err) {
      setError('Error encoding text to Base64');
    }
  };

  const decodeFromBase64 = () => {
    try {
      if (!base64.trim()) {
        setError('Please enter Base64 to decode');
        return;
      }
      
      const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
      if (!base64Regex.test(base64)) {
        setError('Invalid Base64 format');
        return;
      }

      const decoded = decodeURIComponent(escape(atob(base64)));
      setText(decoded);
      setError('');
    } catch (err) {
      setError('Error decoding Base64. Please check your input.');
    }
  };

  const clearAll = () => {
    setText('');
    setBase64('');
    setError('');
  };

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="base64-converter">
      <div className="input-section">
        <h3>Text Input</h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to encode to Base64..."
          rows="5"
        />
        <div className="char-count">Characters: {text.length}</div>
        <div className="button-group">
          <button onClick={encodeToBase64} className="btn encode">
            Encode to Base64
          </button>
          <button onClick={() => copyToClipboard(text)} className="btn secondary">
            Copy Text
          </button>
        </div>
      </div>

      <div className="input-section">
        <h3>Base64 Input</h3>
        <textarea
          value={base64}
          onChange={(e) => setBase64(e.target.value)}
          placeholder="Enter Base64 to decode to text..."
          rows="5"
        />
        <div className="char-count">Characters: {base64.length}</div>
        <div className="button-group">
          <button onClick={decodeFromBase64} className="btn decode">
            Decode from Base64
          </button>
          <button onClick={() => copyToClipboard(base64)} className="btn secondary">
            Copy Base64
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      <div className="utility-buttons">
        <button onClick={clearAll} className="btn clear">
          Clear All
        </button>
      </div>

      {/* <div className="examples">
        <h4>Quick Examples:</h4>
        <div className="example-buttons">
          <button 
            onClick={() => setText('Hello World!')}
            className="btn example"
          >
            Sample Text
          </button>
          <button 
            onClick={() => setBase64('SGVsbG8gV29ybGQh')}
            className="btn example"
          >
            Sample Base64
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Base64Converter;