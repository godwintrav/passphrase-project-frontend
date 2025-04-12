document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const passphrase = document.getElementById('passphrase').value.trim();
  
      // Basic validation
      if (!username || !password || !passphrase) {
        messageDiv.textContent = 'All fields are required.';
        messageDiv.style.color = 'red';
        return;
      }
  
      const payload = {
        username,
        password,
        passphrase
      };
  
      try {
        const response = await fetch('https://passphrase-project-backend.onrender.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        const result = await response.json();
  
        if (response.ok) {
          messageDiv.textContent = 'Registration successful! Redirecting...';
          messageDiv.style.color = 'green';
          form.reset();
  
          // Wait a moment, then redirect
          setTimeout(() => {
            window.location.href = 'login.html';
          }, 1500);
        } else {
          messageDiv.textContent = result.message || 'Registration failed.';
          messageDiv.style.color = 'red';
        }
      } catch (error) {
        messageDiv.textContent = 'An error occurred. Please try again.';
        messageDiv.style.color = 'red';
        console.error('Error:', error);
      }
    });
  });
  