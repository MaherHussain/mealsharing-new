window.handleMealsRequest = () => {
  document.body.innerHTML = `
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

    </div>`;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then((response) => response.json())
    .then((meals) => renderMeals(meals));


    function renderMeals(meals) {
      const table = document.querySelector("#table");
      const tbody = document.querySelector("tbody");
      meals.forEach((meal) => {
        tbody.innerHTML += `<tr>
      <td>${meal.title}</td>
      <td> ${meal.description}</td>
      </tr>`;
      });
    }
};
