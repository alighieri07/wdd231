const url = "data/members.json";
const memberList = document.querySelector("#member-list");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

async function getMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("member-card");

        let image = document.createElement("img");
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `Logo of ${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "300");

        let info = document.createElement("div");
        info.classList.add("member-info");

        let badge = document.createElement("span");
        badge.classList.add("membership-badge", `membership-${member.membership}`);
        badge.textContent = membershipLabel(member.membership);

        let name = document.createElement("h2");
        name.textContent = member.name;

        let address = document.createElement("p");
        address.textContent = member.address;

        let phone = document.createElement("p");
        phone.textContent = member.phone;

        let description = document.createElement("p");
        description.textContent = member.description;

        let website = document.createElement("a");
        website.classList.add("website");
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.textContent = "Visit Website";

        info.appendChild(badge);
        info.appendChild(name);
        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(description);
        info.appendChild(website);

        card.appendChild(image);
        card.appendChild(info);

        memberList.appendChild(card);
    });
};

const membershipLabel = (level) => {
    if (level === 3) return "Gold Member";
    if (level === 2) return "Silver Member";
    return "Member";
};

gridButton.addEventListener("click", () => {
    memberList.classList.remove("list");
    gridButton.classList.add("selected");
    listButton.classList.remove("selected");
});

listButton.addEventListener("click", () => {
    memberList.classList.add("list");
    listButton.classList.add("selected");
    gridButton.classList.remove("selected");
});

getMemberData();