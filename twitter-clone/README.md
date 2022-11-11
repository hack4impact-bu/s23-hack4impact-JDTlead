# Workshop 1 CheckList

### FrontEnd

[ ] Create client folder <br>
[ ] Setup index.html <br>
[ ] Bring in Skeleton CSS <br>
[ ] http://getskeleton.com/ <br>
[ ] https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css <br>
[ ] Create Header <br>
[ ] Create form <br>
[ ] Name <br>
[ ] Content <br>
[ ] u-full-width to both inputs <br>
[ ] Listen for form submit <br>
[ ] Hide the form <br>
[ ] Show loading spinner <br>
[ ] Get data from form and log it <br>
✅ Get user input on the Client <br>
✅ Hide/Show elements on the client <br>

### BackEnd

[ ] Create server folder <br>

[ ] npm init -y (in your server folder) <br>
[ ] npm install express morgan <br>
[ ] Setup index.js <br>
[ ] npm i --save-dev nodemon (automatically refresh when changing server) <br>
[ ] Add GET / route <br>


# Workshop 2 CheckList

### BackEnd

[ ] Add POST /mews route <br>
[ ] log out req.body <br>

### FrontEnd

[ ] fetch POST /mews with form data <br>
[ ] See the CORS error and revel in this moment <br>
✅ Send user input from the client with fetch to the server <br>

### BackEnd

[ ] npm i cors <br>
[ ] log out req.body <br>
[ ] Make sure the server is recieving the data <br>
[ ] Add JSON body parser middleware <br>
[ ] Validate name and content <br>
[ ] Must be a string <br>
[ ] Cannot be empty <br>
[ ] If not valid <br>
[ ] Error code 422 <br>
[ ] Invalid mew, must contain name and content <br>
[ ] Setup DB Connection <br>
[ ] install mongoDB <br>
[ ] npm install monk <br>
[ ] connect to db <br>
[ ] create document collection (mews) <br>
[ ] If Valid <br>
[ ] Create mew object with <br>
[ ] name, content, created_date <br>
[ ]  Insert into DB <br>
[ ] Respond with created mew object <br>
✅ Store data in a database <br>


# Workshop 3

### FrontEnd 
[ ] Log out created Mew after POST request
[ ] Show the form
[ ] Hide loading spinner

### BackEnd
[ ] GET /mews
[ ] Respond with mews from DB
✅ Retrieve data from a database on the Server

### FrontEnd 
[ ] fetch GET /mews
[ ] Iterate over array
[ ] Append each to page
[ ] Reverse before appending
[ ] Show the form
[ ] Hide loading spinner