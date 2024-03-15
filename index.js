function validateUserForm() {
    var isValid = true;
 
    hideError("error-message-user");
 
    var userEmail = document.getElementById("email-usuario").value;
    if (!validateEmail(userEmail)) {
        showError("error-message-user", "Por favor, insira um e-mail válido.");
        isValid = false;
    }

    
    var userPassword = document.getElementById("senha-usuario").value;
    if (userPassword.length < 6) {
        showError("error-message-user", "A senha deve ter pelo menos 6 caracteres.");
        isValid = false;
    }

    return isValid;
}

function validateCompanyForm() {
    var isValid = true;

   
    hideError("error-message-company");

   
    var companyCnpj = document.getElementById("cnpj-empresa").value;
    if (!validateCnpj(companyCnpj)) {
        showError("error-message-company", "Por favor, insira um CNPJ válido.");
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
   
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validateCnpj(cnpj) {
   
    return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
}
function showError(elementId, message) {
    var errorMessageElement = document.getElementById(elementId);
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = "block";
}
function hideError(elementId) {
    var errorMessageElement = document.getElementById(elementId);
    errorMessageElement.style.display = "none";
}
document.querySelectorAll("input").forEach(function(input) {
    input.addEventListener("input", function() {
        hideError("error-message-user");
        hideError("error-message-company");
    });
});
