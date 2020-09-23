window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <div class="container-fluied">
  <h1>Meals</h1>
  
   <div id="meals">
        <table id="table">
            <tbody>
                <tr>
                    <th> meal title</th>
                    <th>description</th>
                </tr>

            </tbody>
        </table>

    </div><br><br>

    <form>
  <div class="form-group row">
    <label for="title" class="col-sm-2 col-form-label">Meal Title</label>
    <div class="col-sm-10">
      <input type="text" name="title" class="form-control" id="title">
    </div>
  </div>
  <div class="form-group row">
    <label for="description" class="col-sm-2 col-form-label">description</label>
    <div class="col-sm-10">
      <textarea  class="form-control" name="description" id="description"></textarea>
    </div>
  </div>
  
  <div class="form-group row">
     <label for="title" class="col-sm-2 col-form-label">Meal Title</label>
    <div class="col-sm-10">
      <input type="text" name="title" class="form-control" id="title">
    </div>
    
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">add</button>
    </div>
  </div>
</form>
</div>
    
   `;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then((response) => response.json())
    .then((meals) => renderMeals(meals));


    function renderMeals(meals) {
      const table = document.querySelector("#table");
      const tbody = document.querySelector("tbody");
      const select = document.querySelector("select")
      meals.forEach((meal) => {
        tbody.innerHTML += `<tr>
      <td>${meal.title}</td>
      <td> ${meal.description}</td>
      </tr>`;

      /*     select.innerHTML += ` <option value="${meal.title}">${meal.title}</option>`; */

      });
    }

   const form = document.querySelector("form");

   let title = document.getElementsByName("title")[0].value;
   let description = document.getElementsByName("description")[0].value;
   let location = document.getElementsByName("location")[0].value;
   let when = document.getElementsByName("when")[0].value;
   let price = document.getElementsByName("price")[0].value;
   let created_date = document.getElementsByName("created_date")[0].value;
   const data = {
     title: title,
     description: description,
     location: location,
     when: when,
     price: price,
     created_date: created_date,
   };
   form.onsubmit = () => {
     console.log(title, description);
    /*  fetch("/api/meals", {
       method: "post", // or 'PUT'
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     })
       .then((response) => response.json())
       .then((data) => {
         alert("your data added");
         console.log(data);
       })
       .catch((error) => {
         console.error("Error:", error);
       }); */
   };
     

   
};
 