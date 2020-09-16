window.handleMealRequest = params => {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>`;


  const api = `api/meals/${params.id}`;
  fetch(api)
    .then((res) => res.json())
    .then((result) => renderResult(result));

    function renderResult(meal) {
      document.body.innerHTML = `<p>meal title : ${meal.title} <br>
   meal description : ${meal.description}</p>`;
    }
};
