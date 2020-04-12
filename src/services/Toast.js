import Toastify from 'toastify-js';



let showToast = (msg,bgcolor) =>
{
    Toastify({
        text: msg,
        duration: 3000, 
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: "red",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();
}

export default showToast;