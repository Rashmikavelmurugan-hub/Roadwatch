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

        const formData = new FormData();

        formData.append("name", document.getElementById("name").value);
        formData.append("issueType", document.getElementById("type").value);
        formData.append("location", document.getElementById("location").value);
        formData.append("description", document.getElementById("description").value);

        if (image.files.length > 0) {
            formData.append("image", image.files[0]);
        }

        try {
            const response = await fetch("https://roadwatch-backend-rashmika.onrender.com/api/reports", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Report submitted successfully!");
                form.reset();
                preview.src = "";
            } else {
                alert("Failed to submit report.");
            }

        } catch (error) {
            alert("Server error. Please try again.");
            console.error(error);
        }
    });
}