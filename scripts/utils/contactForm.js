// Get modal fomr elements
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");

const modal = document.querySelector("#contact-modal");
const form = document.querySelector("#modal-form");
const formInputs = document.querySelectorAll(".modal-form-input");
const modalTitle = document.querySelector("#modal-header");
const modalSuccessMessage = document.querySelector(".success-message");
const btnOpenModal = document.querySelector("#btn-open-modal");
const btnCloseModal = document.querySelector("#btn-close-modal");

const firstnameError = document.querySelector("#firstname-verif");
const lastnameError = document.querySelector("#lastname-verif");
const emailError = document.querySelector("#email-verif");
const messageError = document.querySelector("#message-verif");

// Add lsiteners
btnOpenModal.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "true");
    header.setAttribute("aria-hidden", "true");
    body.classList.add("no-scroll");
    
    btnOpenModal.setAttribute("aria-expanded", "true");
    btnCloseModal.setAttribute("aria-expanded", "true");
    
    displayModal();
});

btnCloseModal.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
    header.setAttribute("aria-hidden", "false");
    body.classList.remove("no-scroll");
    
    btnOpenModal.setAttribute("aria-expanded", "false");
    btnCloseModal.setAttribute("aria-expanded", "false");

    closeModal();
});

// get and listen to modal submit button onclick event
const submitButton = document.querySelector("#modal-submit-btn");
submitButton.addEventListener("click", (event) => submitModal(event));

const modalPressEsc = (e) => {
    if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        body.classList.remove("no-scroll");    
    }
}

// Open the modal form
function displayModal() {
    const modal = document.getElementById("contact-modal");
	modal.style.display = "grid";

    btnCloseModal.focus();

    document.addEventListener("keydown", modalPressEsc);
}

// Close the modal form
function closeModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";

    document.removeEventListener("keydown", modalPressEsc);
}

// Stores inputs values in a array and display values in the console    
function submitModal(event) {
    event.preventDefault();
    
    const formInputs = document.querySelectorAll(".modal-form-input");
    
    formValidation();

    const inputs = [];
    formInputs.forEach(input => {
        inputs.push(input.value);
        // console.log(input.value);
    });
}

// Form validation
function formValidation() {
    // define form success validation variable
    let successScore = 0;
    
    // loop on inputs to check and submit if clean
    for (let i = 0; i < formInputs.length; i++) {
        const inputField = formInputs[i];
        inputField.value = inputField.value.trim();

        switch (inputField.id) {
        case 'firstname':
        case 'lastname':
            !isEmpty(inputField) ? !checkLenght(inputField, 2) ? successScore++ : '' : '';
            break;
        case 'email':
            !isEmpty(inputField) ? validateEmail(inputField) ? successScore++ : '' : '';
            break;
        case 'message':
            !isEmpty(inputField) ? successScore++ : '';
            break;
        default:
            break;
        }
      
        if (successScore === 4) {
            showSuccessMessage();
            return
        }
    }
}

// display success message if all field are validate
function showSuccessMessage() {
    form.textContent = "";
    modalTitle.textContent = "";
    modalSuccessMessage.style.display = "block";
}


// check if inputs are filled
function isEmpty(e) {
    if (e.value === '') {
        e.classList.add("wrong-input");
        e.nextElementSibling.textContent = "Ce champ est obligatoire, veuillez saisir une donnée";
        return true;
    } else {
        e.classList.remove("wrong-input");
        e.nextElementSibling.textContent = "";
        return false;
    }
}

  // check if 'e'lement length is higher than 'n'umber
function checkLenght(e, n) {
    inputValue = e.value;
    inputValueLength = inputValue.length;
    
    if (inputValueLength < n) {
        e.classList.add("wrong-input");
        e.nextElementSibling.textContent = "Veuillez saisir au moins 3 caractère";
      return true;
    } else {       
        e.classList.remove("wrong-input"); 
        e.nextElementSibling.textContent = "";
        return false;
    }
}

// check if the email format is valid
function validateEmail(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = regex.test(e.value);
    if (!result) {
        e.classList.add("wrong-input");
        e.nextElementSibling.textContent = "Veuillez entrer une adresse email valide";
      return false;
      } else {
        e.classList.remove("wrong-input");
        e.nextElementSibling.textContent = "";
        return true;
    }
}