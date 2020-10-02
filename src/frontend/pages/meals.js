window.handleMealsRequest = () => {
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
      <button class="w3-padding-large w3-button" title="More">admin<i class="fa fa-caret-down"></i></button>     
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="addMeal" class="w3-bar-item w3-button">add meal</a>
        <a href="#" class="w3-bar-item w3-button">add reservations</a>
       
      </div>
    </div>
    <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
  </div>
</div>
<div class="topheader">
<h4 class="text-center">Meals</h4> <br>
  <p>we love meals
   - </p>
   </div>
  
</header>
  
  <div class="container mt-5">
   <div id="meals">
   <h2>OUR MENU</h2>

        <table id="table">
            <tbody>
                <tr>
                    <th> meal title</th>
                    <th>description</th>
                    <th>price</th>
                   
                </tr>

            </tbody>
        </table>

    </div>
    <br><br>
 <a href="addMeal" class="Link">add new meal</a>
   </div>
</div>

   
   `;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then((response) => response.json())
    .then((meals) => renderMeals(meals));

  function renderMeals(meals) {
    const table = document.querySelector("#table");
    const tbody = document.querySelector("tbody");
    const select = document.querySelector("select");
    meals.forEach((meal) => {
      tbody.innerHTML += `<tr>
      <td>${meal.title}</td>
      <td> ${meal.description}</td>
      <td> ${meal.price} DKK</td>
      </tr>`;

      /*     select.innerHTML += ` <option value="${meal.title}">${meal.title}</option>`; */
    });
  }

  // burger menu function
  function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
};
 