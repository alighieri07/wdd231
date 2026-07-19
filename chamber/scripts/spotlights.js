const spotlightContainer = document.querySelector("#spotlight-container");
const membersUrl = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();
        
        const goldSilver = data.members.filter(
            (member) => member.membership === 2 || member.membership === 3
        );

        const shuffled = goldSilver.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 3);

        displaySpotlights(selected);
    } catch (error) {
        console.log(error);
    }
}

getMembers();

function displaySpotlights(members) {
    spotlightContainer.innerHTML = members.map((member) => `
        <section class="spotlight-card">
            <img src="${member.image}" alt="Logo of ${member.name}" width="120" height="90" loading="lazy">
            <h3>${member.name}</h3>
            <p class="level">${member.membership === 3 ? "Gold Member" : "Silver Member"}</p>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        </section>
    `).join("");
}