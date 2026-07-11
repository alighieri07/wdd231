const currentYear = document.querySelector("#current-year");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#last-modified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;