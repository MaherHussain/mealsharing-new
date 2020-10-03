// @ts-ignore
window.handleaddMealRequest = () => {
document.body.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
		      <a class="navbar-brand" href="/"><span>MealSharing<br><img src="../templateFiles/images/logo-white.png"  style = "width:100px"/></span>   </a>
		      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="oi oi-menu"></span> Menu
		      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item active "><a href="/" class="nav-link">Home</a></li>
	          <li class="nav-item "><a href="meals" class="nav-link">meals</a></li>
           
            <div class="dropdown show pt-4">
              <a class=" dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Admin
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="addMeal">Add meal</a>
                <a class="dropdown-item" href="#">reservations</a>
                
              </div>
        </div>
           
            
	        </ul>
	      </div>
		  </div>
	  </nav>
    <!-- --------------------------------END nav -------------------------------->

<div class="topheader">
<h4 class="text-center text-dark">Meals</h4> <br>
  <p>we love meals
   - </p>
   </div>




<div class="container pt-5 pb-5">

<form>
   <h2 class="pt-5 pb-5">Add meal</h2>
   <div class="form-group row">
     <label for="title" class="col-sm-2 col-form-label">
       Meal Title
     </label>
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
     <label for="description" class="col-sm-2 col-form-label">
       description
     </label>
     <div class="col-sm-10">
       <textarea
         class="form-control"
         name="description"
         id="description"
       ></textarea>
     </div>
   </div>

   <div class="form-group row">
     <label for="location" class="col-sm-2 col-form-label">
       location
     </label>
     <div class="col-sm-10">
       <input type="text" name="location" class="form-control" id="location" />
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
     <label for="title" class="col-sm-2 col-form-label">
       max-reservations
     </label>
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
     <label for="title" class="col-sm-2 col-form-label">
       Price
     </label>
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
       <button type="submit" class="btn btn-dark">
         add meal
       </button>
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