const formSubmit = document.getElementById("submitForm");
const laptime = document.getElementById("laptime");
const emailError = document.querySelector(".email-err");
const submitBtn = document.getElementById("postSubmit")

let formData;

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  formData = new FormData(formSubmit)
  formSubmit.style.display = "none"
  laptime.style.display = "block"
})



laptime.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(laptime)
  const time = data.get("min") + ":" + data.get("sec") + ":" + data.get("ms");
  formData.append("laptime", time);

  try {
    const response = await fetch(
      "http://195.250.20.169:3000/api/user/add-user",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );
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
    window.location.reload();
    // window.location.href = "http://127.0.0.1:5500/frontend/form/laptime.html";

    console.log(result);
  } catch (error) {
    console.error("Error occurred while submiting the form", error);
  }
});
