// Read the values submitted through the GET form (they arrive as URL query parameters)
const params = new URLSearchParams(window.location.search);

document.querySelector("#out-fname").textContent = params.get("fname") || "—";
document.querySelector("#out-lname").textContent = params.get("lname") || "—";
document.querySelector("#out-email").textContent = params.get("email") || "—";
document.querySelector("#out-phone").textContent = params.get("phone") || "—";
document.querySelector("#out-orgname").textContent = params.get("orgname") || "—";
document.querySelector("#out-timestamp").textContent = params.get("timestamp") || "—";