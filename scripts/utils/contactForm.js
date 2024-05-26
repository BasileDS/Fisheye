// Get and listent to modal elements
const btnOpenModal = document.querySelector("#btn-open-modal");
btnOpenModal.addEventListener("click", displayModal);

const btnCloseModal = document.querySelector("#btn-close-modal");
btnCloseModal.addEventListener("click", closeModal);

// get and listen to modal submit button onclick event
const submitButton = document.querySelector("#modal-submit-btn");
submitButton.addEventListener("click", (event) => submitModal(event));

// Open the modal form
function displayModal() {
    const modal = document.getElementById("contact-modal");
	modal.style.display = "grid";
}

// Close the modal form
function closeModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";
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