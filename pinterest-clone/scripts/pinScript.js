document.querySelector("#picture").addEventListener("change", (event) => {
    //check if there is a file here, targeting files at the first element in the array
  if (event.target.files && event.target.files[0]) {
    //regular expression, satisfy image/gif, /png etc
    //if the file has a type
    if (/image\/*/.test(event.target.files[0].type)) {
        // fileReader to read the file
      const reader = new FileReader();

        // read the URL and the actual file, when it loads, we want it to do something
      reader.onload = function () {
        // calling pinimage img from the html and put it in the src in the html file
        document.querySelector(".pinImage img").src = reader.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  // need to document, and choose file pictures. When the values comes in, it will be a file
  // this allows us to choose a file over and over again
  document.querySelector("#picture").value = "";
});
