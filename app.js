document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
  
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  

    if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      return;
    }
  
  
    if (!validatePassword(password)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      return;
    }
  
   
    console.log('Form submitted successfully');
   
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePassword(password) {
    return password.length >= 6;
  }