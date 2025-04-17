document.getElementById('form_send').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    // Basic validation
    if (!data.firstName || !data.email || !data.message) {
      alert('Please fill in all required fields: First Name, Email, and Message');
      return;
    }
  
    // Sanitize inputs
    const sanitize = (text) => text.replace(/<[^>]*>?/gm, '');
    data.message = sanitize(data.message);
  
    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
  
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) throw new Error('Server response was not OK');
  
      // Successful submission - redirect
      window.location.href = 'thankyou.html'; 
  
    } catch (error) {
      console.error('Submission error:', error);
      
      // Show error message on form
      const errorDiv = document.createElement('div');
      errorDiv.className = 'form-error';
      errorDiv.textContent = 'Failed to send message. Please try again.';
      errorDiv.style.color = 'red';
      errorDiv.style.marginTop = '10px';
      
      // Remove any existing errors first
      const existingError = form.querySelector('.form-error');
      if (existingError) existingError.remove();
      
      form.appendChild(errorDiv);
  
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.textContent = "Send";
    }
  });