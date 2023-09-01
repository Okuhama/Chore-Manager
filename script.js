// script.js
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const choreTable = document.getElementById("choreTable");
    const personSelect = document.getElementById("person");
    const choreSelect = document.getElementById("chore");
    const amountRange = document.getElementById("amount");
    const customAmountInput = document.getElementById("customAmount");
    const amountDisplay = document.getElementById("amountDisplay");
    const form = document.getElementById("choresForm");
    const tbody = choreTable.querySelector("tbody");

    amountRange.addEventListener("input", function () {
        amountDisplay.textContent = "$" + amountRange.value;
    });

    addButton.addEventListener("click", function () {
        const date = new Date().toLocaleDateString();
        const person = personSelect.value;
        const chore = choreSelect.value;
        const amount = customAmountInput.value || "$" + amountRange.value;

        const newRow = `
            <tr>
                <td>${date}</td>
                <td>${person}</td>
                <td>${chore}</td>
                <td>${amount}</td>
                <td><button class="delete">Delete</button></td>
            </tr>
        `;

        tbody.innerHTML += newRow;
        form.reset();
    });

    choreTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            event.target.closest("tr").remove();
        }
    });
});
