document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const feedback = document.getElementById("feedback").value;

      console.log("Feedback Submitted:", { name, feedback });

      document.getElementById("confirmationMsg").innerText =
        "Thank you for your feedback, " + name + "!";

      form.reset();
    });
  }
});
