// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
const cardDiv = document.getElementById("card-div");

function showWelcomeMessage(account) {
    // Reconfiguring DOM elements
    cardDiv.style.display = 'initial';
    welcomeDiv.innerHTML = `Welcome ${account.username} ${account.name}`;
    // signInButton.setAttribute("onclick", "signOut();");
    // signInButton.setAttribute('class', "btn btn-success")
    // signInButton.innerHTML = "Sign Out";
}