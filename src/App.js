import React from 'react';
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          borderRadius: '20px',
          padding: '20px',
          backgroundColor: '#6DD5ED', // Slightly lighter shade of 56CCF2
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#FFFFFF' }}>Login</h2>
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
            padding: '8px', // Reduced size
            fontSize: '14px', // Reduced size
            backgroundColor: '#D9D9D9',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '15px', // Updated radius
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
