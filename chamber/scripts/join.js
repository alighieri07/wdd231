// Fill the hidden timestamp field with the exact moment the form was loaded
const timestampField = document.querySelector("#timestamp");
timestampField.value = new Date().toString();

// Open the matching dialog when a "Learn More" button is clicked
const modalTriggers = document.querySelectorAll(".modal-trigger");
modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const modalId = trigger.getAttribute("data-modal");
        const modal = document.querySelector(`#${modalId}`);
        modal.showModal();
    });
});

// Close any dialog when its "Close" button is clicked
const closeButtons = document.querySelectorAll(".modal-close");
closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});