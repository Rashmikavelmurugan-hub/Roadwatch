const form = document.getElementById("reportForm");
const image = document.getElementById("image");
const preview = document.getElementById("preview");

if (image) {
    image.addEventListener("change", function () {
        const file = image.files[0];

        if (file) {
            preview.src = URL.createObjectURL(file);
        }
    });
}

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            issueType: document.getElementById("type").value,
            location: document.getElementById("location").value,
            description: document.getElementById("description").value
        };

        const response = await fetch("http://localhost:8080/api/reports", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Report submitted successfully!");
            form.reset();
            preview.src = "";
        } else {
            alert("Failed to submit report.");
        }
    });
}