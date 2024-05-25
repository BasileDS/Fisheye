// Get open and close modal elements
const btnOpenModal = document.querySelector("#btn-open-modal");
const btnCloseModal = document.querySelector("#btn-close-modal");

// Add listeners
btnOpenModal.addEventListener("click", displayModal);
btnCloseModal.addEventListener("click", closeModal);

// Open the modal form
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

// Close the modal form
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
