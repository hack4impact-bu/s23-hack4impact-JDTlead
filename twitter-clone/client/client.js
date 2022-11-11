// Workshop 1 Part 1
const form = document.querySelector("form"); //pass in any css selector
// Workshop 1 Part 2
const loadingElement = document.querySelector(".loading"); //grab element with the loading class
loadingElement.style.display = "none";

// Workshop 2 Variables
const API_URL = "http://localhost:8080/mews";

form.addEventListener("submit", (event) => {
  //console.log("form is submitted")
  event.preventDefault(); // prevent webpage to refresh

  // grab user input from the page
  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");

  const mew = {
    name,
    content,
  };
  console.log(mew);
  form.style.display = "none";
  loadingElement.style.display = "";
  //console.log("form submitted");

  // Workshop 2 Starts Here
  fetch(API_URL, {
    // turn it into JSON
    method: "POST",
    body: JSON.stringify(mew),
    headers: {
      "content-type": "application/json", // telling the server, in the body of the json is a json
    },
  });
  // Workshop 2 Ends Here
});
