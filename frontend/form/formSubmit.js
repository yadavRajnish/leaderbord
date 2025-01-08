const formSubmit = document.getElementById("submitForm");
const emailError = document.querySelector(".email-err");

formSubmit.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(formSubmit).entries();

  try {
    const response = await fetch("http://195.250.20.169:3000/api/user/add-user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    if (!response.ok) {
      const result = await response.json();
      if (result.message === "The email is already in use.") {
        emailError.textContent = result.message;
        emailError.style.display = "block";
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    window.alert("User added successfully!");
    formSubmit.reset();
    emailError.style.display = "none";

    console.log(result);
  } catch (error) {
    console.error("Error occurred while submiting the form", error);
  }
});
