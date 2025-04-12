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
        const response = await fetch('https://passphrase-project-backend.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        const result = await response.json();
  
        if (response.ok) {
          messageDiv.textContent = 'Login successful! Thank you for participating';
          messageDiv.style.color = 'green';
        } else {
          messageDiv.textContent = result.message || 'Login failed.';
          messageDiv.style.color = 'red';
        }
      } catch (error) {
        messageDiv.textContent = 'An error occurred. Please try again.';
        messageDiv.style.color = 'red';
        console.error('Error:', error);
      }
    });
  });
  