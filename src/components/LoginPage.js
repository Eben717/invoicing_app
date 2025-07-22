import React from 'react';

function LoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Inter' }}>
      <form className='login-form'>
        <input
          type="text"
          placeholder="Username"
          style={{
            marginBottom: '20px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '20px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            outline: 'none',
            color: '#333',
            fontFamily: 'Inter',
            '::placeholder': { color: '#aaa' },
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            marginBottom: '20px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '20px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            outline: 'none',
            color: '#333',
            fontFamily: 'Inter',
            '::placeholder': { color: '#aaa' },
          }}
        />
        <button type="submit" className='login-button'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;