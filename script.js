document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    // Fetch request to handle form submission
    fetch("https://example.com/contact", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  });
});
