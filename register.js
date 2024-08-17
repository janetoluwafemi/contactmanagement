BASE_URL = "http://localhost:8080/create"
const form = document.querySelector(".btnDiv")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const firstName = document.querySelector(".FirstName").value();
    console.log(firstName);
})