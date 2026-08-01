import discoverItems from "../data/discover.mjs";

const container = document.querySelector("#discover-container");

discoverItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("discover-card", `card-${index + 1}`);

    card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
            <img src="${item.image}" alt="${item.alt}" width="300" height="200" loading="lazy">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class="learn-more-btn" data-id="${item.id}">Learn More</button>
    `;

    container.appendChild(card);
});

// Modal (dialog) logic for "Learn More"
const modal = document.querySelector("#detail-modal");
const modalName = document.querySelector("#modal-name");
const modalAddress = document.querySelector("#modal-address");
const modalDescription = document.querySelector("#modal-description");

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("learn-more-btn")) {
        const id = Number(event.target.getAttribute("data-id"));
        const item = discoverItems.find((entry) => entry.id === id);

        modalName.textContent = item.name;
        modalAddress.textContent = item.address;
        modalDescription.textContent = item.description;
        modal.showModal();
    }
});

document.querySelector("#modal-close-btn").addEventListener("click", () => {
    modal.close();
});

// localStorage last-visit message
const visitMessage = document.querySelector("#visit-message");
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const msInDay = 1000 * 60 * 60 * 24;
    const diffMs = now - Number(lastVisit);

    if (diffMs < msInDay) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        const days = Math.floor(diffMs / msInDay);
        const dayWord = days === 1 ? "day" : "days";
        visitMessage.textContent = `You last visited ${days} ${dayWord} ago.`;
    }
}

localStorage.setItem("lastVisit", now.toString());