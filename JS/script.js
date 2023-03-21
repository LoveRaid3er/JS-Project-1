// Admin Login Page
document.getElementById('btnLogin').onclick=function(){
    event.preventDefault()
    const getName = document.getElementById('fullName').value
    const getEmail = document.getElementById('userEmail').value
    const getPassword = document.getElementById('userPassword').value
    if (!getName) {
        Toastify({
            text: "Please Enter Your Full Name",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
      }
       if (getEmail !== "junaid@gmail.com") {
        Toastify({
            text: "Please Enter Correct Email",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
      }
      if (getPassword !== "123456") {
        Toastify({
            text: "Please Enter the Correct Password",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return;
      }else{
      window.location.href ='homepage.html'
      
    }
    
}
      
