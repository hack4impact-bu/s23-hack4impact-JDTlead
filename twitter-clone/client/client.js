// Workshop 1 Part 1
const form = document.querySelector("form"); //pass in any css selector
// Workshop 1 Part 2
const loadingElement = document.querySelector(".loading"); //grab element with the loading class
loadingElement.style.display = "none";

// Workshop 2 Variables
const API_URL = "http://localhost:8080/mews";

// Workshop 3 Variable
const mewsElement = document.querySelector(".mews");

// Workshop 3 Portion
listAllMews();

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
  // This function here is to submitting to the server
  fetch(API_URL, {
    // turn it into JSON
    method: "POST",
    body: JSON.stringify(mew),
    headers: {
      "content-type": "application/json", // telling the server, in the body of the json is a json
    },
  })
    .then((response) => response.json())
    .then((createdMew) => {
      console.log(createdMew);
      // Workshop 3 Starts Portion
      form.reset();
      //loadingElement.style.display = "none"; // Keep this for workshops before workshop 4
      setTimeout(() => {
        form.style.display = "";
      }, 2000); // 2 seconds until it unhides the form

      listAllMews(); //Workshop 3 Portion
    });
  // Workshop 2 Ends Here
});
// Workshop 3 Starts Here
function listAllMews() {
  mewsElement.innerHTML = "";
  fetch(API_URL)
    .then((response) => response.json())
    .then((mews) => {
      console.log(mews);
      // iterate over them
      mews.reverse();
      mews.forEach((mew) => {
        //createElement - only create the elements and not display them
        const div = document.createElement("div");

        const header = document.createElement("h3");
        header.textContent = mew.name;

        const contents = document.createElement("p");
        contents.textContent = mew.content;

        const date = document.createElement("small");
        date.textContent = new Date(mew.created);

        // appendChild to display them
        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(date);

        mewsElement.appendChild(div);
      });
      loadingElement.style.display = "none";
    });
}
// Workshop 3 Ends Here
