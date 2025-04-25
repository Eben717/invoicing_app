import React from 'react';
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          border: '2px solid rgba(0, 123, 255, 0.5)',
          borderRadius: '20px',
          padding: '20px',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          style={{
            marginBottom: '10px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '20px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            outline: 'none',
            color: '#333',
            '::placeholder': { color: '#aaa' },
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            marginBottom: '10px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '20px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            outline: 'none',
            color: '#333',
            '::placeholder': { color: '#aaa' },
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default App;
