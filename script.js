// Initialize EmailJS
emailjs.init({
    publicKey: 'MkVgG5czChulLl8km',
  });
  
  // Define the submit function
  const submitf = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Extract values from form fields
    const from_name = document.querySelector("#fname").value;
    const email = document.querySelector("#email").value;
    const msg = document.querySelector("#msg").value;
  
    // Send the email using EmailJS
    emailjs.send("service_yc8qpmv", "template_e72ffj5", {
      from_name: from_name,
      email: email,
      msg: msg,
    })
    .then((response) => {
      console.log("Email sent:", response);
      alert("Email Sent");
      
    })
    .catch((error) => {
      console.error("Email send error:", error);
      alert("Failed to send email");
    });
    
    document.querySelector("form").reset(); // Reset the form after successful submission</
  };
  
  // Attach event listener to the form
  document.querySelector("form").addEventListener("submit", submitf);
  