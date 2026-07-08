const msg=document.getElementById("after-signin");
const previous=document.getElementById("before-signin");
function createAccount(){
    msg.textContent="Your account has been created successfully! You will receive a confirmation email shortly.";
    previous.style.display="none";
}
function twitterLogin(){
    msg.textContent="This feature is under development and will be available soon. Please use the other sign-in method for now."
     previous.style.display="none";
}