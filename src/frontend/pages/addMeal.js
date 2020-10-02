window.handleaddMealRequest = () => {
document.body.innerHTML = `
<div class="container-fluied"> 
  <header class="mt-5">
 <div class="w3-top">
  <div class="w3-bar w3-black w3-card">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <a href="/" class="w3-bar-item w3-button w3-padding-large">HOME</a>
    <a href="meals" class="w3-bar-item w3-button w3-padding-large w3-hide-small" data-navigo>Meals</a>
   
    <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
    <div class="w3-dropdown-hover w3-hide-small">
      <button class="w3-padding-large w3-button" title="More">admin <i class="fa fa-caret-down"></i></button>     
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="addMeal" class="w3-bar-item w3-button">add meal</a>
        <a href="#" class="w3-bar-item w3-button">add reservations</a>
       
      </div>
    </div>
   
  </div>
</div>
<div class="topheader">
<h4>fill the form to add meal</h4> <br>
  <p>let's do that </p>
   </div>
  
</header>


<div class="container mt-5">

  <form>
        <h2>Add meal</h2>
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">Meal Title</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="title"
              class="form-control"
              id="title"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="description" class="col-sm-2 col-form-label"
            >description</label
          >
          <div class="col-sm-10">
            <textarea
              class="form-control"
              name="description"
              id="description"
            ></textarea>
          </div>
        </div>

        <div class="form-group row">
          <label for="location" class="col-sm-2 col-form-label">location</label>
          <div class="col-sm-10">
            <input
              type="text"
              name="location"
              class="form-control"
              id="location"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <input
              type="date"
              name="when"
              class="form-control"
              hidden
              id="when"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label"
            >max-reservations</label
          >
          <div class="col-sm-10">
            <input
              type="number"
              name="max_reservations"
              class="form-control"
              id="max-reservation"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input
              type="number"
              step="0.01"
              name="price"
              class="form-control"
              id="price"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <input
              type="date"
              name="created_date"
              class="form-control"
              hidden
              id="created_date"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-dark">add meal</button>
          </div>
        </div>
      </form>
</div>


 

`;

 async function postData(url = "", data = {}) {
   // Default options are marked with *
   const response = await fetch(url, {
     method: "POST", // *GET, POST, PUT, DELETE, etc.
     mode: "cors", // no-cors, *cors, same-origin
     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
     credentials: "same-origin", // include, *same-origin, omit
     headers: {
       "Content-Type": "application/json",
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
     redirect: "follow", // manual, *follow, error
     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     body: JSON.stringify(data), // body data type must match "Content-Type" header
   });
   return response.json(); // parses JSON response into native JavaScript objects
 }
 const date = new Date();
 const currentDate = date.toISOString().slice(0, 10);
 
 const form = document.querySelector("form");
 let when = (document.getElementById("when").value = currentDate);
 let created_date = document.getElementById("created_date").value = currentDate;
 form.addEventListener("submit", (e) => {
   e.preventDefault();
   postData("/api/meals", {
     title: document.getElementById("title").value,
     description: document.getElementById("description").value,
     location: document.getElementById("location").value,
     when: when,
     price: document.getElementById("price").value,
     max_reservation: document.getElementById("max-reservation").value,
     created_date: created_date,
   })
     .then((data) => {
       alert("the meal is added ");
       console.log(data); // JSON data parsed by `data.json()` call
     })
     .catch((error) => console.log(error));
 });

 // burger menu function
/* function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
} */

}