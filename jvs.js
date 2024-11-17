
// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Clear previous errors
//     const errorElements = document.querySelectorAll('.error-message');
//     errorElements.forEach(el => el.style.display = 'none');

//     // Get form values
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phone = document.getElementById('phone').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // Validation flags
//     let isValid = true;

//     // Name validation
//     if (name === '') {
//         document.getElementById('nameError').textContent = 'Name is required';
//         document.getElementById('nameError').style.display = 'block';
//         isValid = false;
//     }
//      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if(email === ' ' || !emailPattern.test(email))
//     {
//      document.getElementById('error-invalid-email').textContent = 'Valid email is required';
//     document.getElementById('error-invalid-email').style.display = 'block';
//     isValid = false;
//     }
   
//     // const emailPattern = /^#$%^&*@]+@[^\s@]+\.[^\s@]+$/;
//     // if (email === '' || !emailPattern.test(email)) {
//     //     document.getElementById('error-invalid-email').textContent = 'Valid email is required';
//     //     document.getElementById('error-invalid-email').style.display = 'block';
//     //     isValid = false;
//     // }

    
//     const phonePattern = /^[0-9]{10}$/;
//     if (phone === '' || !phonePattern.test(phone)) {
//         document.getElementById('phoneError').textContent = 'Valid phone number is required';
//         document.getElementById('phoneError').style.display = 'block';
//         isValid = false;
//     }

   
//     if (message === '') {
//         document.getElementById('messageError').textContent = 'Message is required';
//         document.getElementById('messageError').style.display = 'block';
//         isValid = false;
//     }

    
//     if (isValid) {
//         alert('Form submitted successfully!');
    
//     }
// });





document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.style.display = 'none');


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();


    let isValid = true;

 
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

  
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email === ' ' || !emailPattern.test(email))
    {
     document.getElementById('error-invalid-email').textContent = 'Valid email is required';
    document.getElementById('error-invalid-email').style.display = 'block';
    isValid = false;
    }
    
    





//      const emailPattern = /#%&@]+@[^\s@]+\.[^\s@]+$/;
//    if (email === '' || !emailPattern.test(email)) {
//      document.getElementById('error-invalid-email').textContent = 'Valid email is required';
//     document.getElementById('error-invalid-email').style.display = 'block';
//     isValid = false;
//    }

    
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

   
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    
    if (isValid) {
        alert('Form submitted successfully!');
    
    }
});
