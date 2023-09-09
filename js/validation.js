const form = document.getElementById('form');

const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const country = document.getElementById('country');
const age = document.getElementById('age');
const yearsOfExperience = document.getElementById('yearsOfExperience');

const validateForm = () => {
    let noError = true;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const countryValue = country.value.trim();
    const ageValue = age.value.trim();
    const yearsOfExperienceValue = yearsOfExperience.value.trim();

    if (emailValue === '') {
        setError (email, 'Le courriel est requis !');
        noError = false;
    }else{
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError (password, 'Le mot de passe est requis !');
        noError = false;
    }else{
        setSuccess(password);
    }

    if (confirmPasswordValue === '') {
        setError (confirmPassword, 'Le mot de passe est requis !');
        noError = false;
    }else{
        setSuccess(confirmPassword);
    }

    if (firstNameValue === '') {
        setError (firstName, 'Le prénom est requis !');
        noError = false;
    }else{
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError (lastName, 'Le nom est requis !');
        noError = false;
    }else{
        setSuccess(lastName);
    }

    if (countryValue === '') {
        setError (country, 'Le pays est requis !');
        noError = false;
    }else{
        setSuccess(country);
    }

    if (ageValue === '') {
        setError (age, 'L\'âge est requis !');
        noError = false;
    }else{
        setSuccess(age);
    }

    if (yearsOfExperienceValue === '') {
        setError (yearsOfExperience, 'Le nombre d\'expérience est requis !');
        noError = false;
    }else{
        setSuccess(yearsOfExperience);
    }

    return noError;
}

const setError = (element, message) => {
    const errorDisplay = element.nextElementSibling; // Récupère l'élément d'affichage des erreurs à côté de l'élément donné.

    errorDisplay.innerText = message;
    element.classList.add("border-red-500"); // Ajoute une classe pour indiquer une erreur de saisie.
    errorDisplay.classList.add("text-red-600"); // Ajoute une classe pour afficher le texte en rouge.
}

const setSuccess = (element) => {
    const errorDisplay = element.nextElementSibling; // Récupère l'élément d'affichage des erreurs à côté de l'élément donné.

    errorDisplay.innerText = "";
    element.classList.remove("border-red-500"); // Supprime la classe d'erreur.
    errorDisplay.classList.remove("text-red-600"); // Supprime la classe du texte en rouge.
}