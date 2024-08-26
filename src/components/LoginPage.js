import React from 'react';

function LoginPage() {
  const handleLogin = () => {
    window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com';
  };

  return (
    <div className="login-container">
      <h1>Welcome to ReachInbox</h1>
      <button className="login-btn" onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default LoginPage;
