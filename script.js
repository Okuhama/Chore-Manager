// script.js
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const addChoreOptionButton = document.getElementById("addChoreOption"); // New button
    const choreTable = document.getElementById("choreTable");
    const personSelect = document.getElementById("person");
    const choreSelect = document.getElementById("chore");
    const amountRange = document.getElementById("amount");
    const customAmountInput = document.getElementById("customAmount");
    const amountDisplay = document.getElementById("amountDisplay");
    const newChoreOptionInput = document.getElementById("newChoreOption"); // New input
    const form = document.getElementById("choresForm");
    const tbody = choreTable.querySelector("tbody");

    let lastSelectedAmount = amountRange.value; // Initialize with the default value
    amountDisplay.textContent = "$" + amountRange.value;

    amountRange.addEventListener("input", function () {
        // Update the amount display as the slider value changes
        amountDisplay.textContent = "$" + amountRange.value;
        lastSelectedAmount = amountRange.value; // Update the last selected value
    });

    addButton.addEventListener("click", function () {
        const date = new Date().toLocaleDateString();
        const person = personSelect.value;
        const chore = choreSelect.value;
        const customAmount = customAmountInput.value;

        // Use the last selected amount if custom amount is empty
        const amount = customAmount !== "" ? "$" + customAmount : "$" + lastSelectedAmount;

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

        // Reset the custom amount input and keep the slider value
        customAmountInput.value = "";
        amountRange.value = lastSelectedAmount;
        amountDisplay.textContent = "$" + lastSelectedAmount;

        form.reset();
    });

    choreTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            event.target.closest("tr").remove();
        }
    });
    addChoreOptionButton.addEventListener("click", function () {
        const newChoreOption = newChoreOptionInput.value.trim();

        if (newChoreOption !== "") {
            const option = document.createElement("option");
            option.value = newChoreOption;
            option.text = newChoreOption;
            choreSelect.appendChild(option);
            newChoreOptionInput.value = ""; // Clear the input box
        }
    });
});
