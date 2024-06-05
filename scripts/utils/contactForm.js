// Get and listent to modal elements
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const modal = document.querySelector("#contact-modal");

const btnOpenModal = document.querySelector("#btn-open-modal");
const btnCloseModal = document.querySelector("#btn-close-modal");

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

    const inputs = [];
    formInputs.forEach(input => {
        inputs.push(input.value);
        console.log(input.value);
    });
}