import React from 'react';

function LoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Inter' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          height: '200px',
          borderRadius: '20px',
          padding: '40px',
          backgroundColor: '#6DD5ED',
          fontFamily: 'Inter',
        }}
      >
        <img
          src="/PCU_Logo.jpg"
          alt="PCU Logo"
          style={{
            display: 'block',
            margin: '0 auto 15px auto',
            width: '50px',
            height: '60px',
            borderRadius: '45%',
          }}
        />
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
        <button
          type="submit"
          style={{
            padding: '8px',
            fontSize: '14px',
            backgroundColor: '#D9D9D9',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            fontFamily: 'Inter',
            fontWeight: 'bold',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;