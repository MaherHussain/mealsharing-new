window.handleMealRequest = params => {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>
  <ul class="meal"></ul>


   <div id="reser">
    <h2>create reservation to chossen meal</h2><br><br>
  <form action="" method="post" >
  <label for="name">name </label><br>
  <input type="text" id="name" name="contact_name" required><br><br>

  <label for="contact_email"> email:</label><br>
  <input type="text" id="contact_email" name="contact_email" required> <br><br>

  <label for="contact_phonenumber" >phone number :</label><br>
  <input type="text" id="contact_phonenumber" name="contact_phonenumber" required><br><br>

  <input type="text" id="created_date" hidden name="created_date"><br><br>

  
  <input type="number" hidden id="number_of_guests" name="number_of_guests" value="10"><br>
 
  
 
</form>
  </div>
  `;
const form = document.querySelector("form");

  
  fetch(`/api/meals/${params.id}`)
   .then(res =>res.json())
   .then((data) => {
     
         const ul = document.querySelector("ul");
         const li = document.createElement("li");
         li.innerHTML = `meal title : ${data[0].title}<br> description : ${data[0].description}`;
         ul.appendChild(li);

    form.innerHTML += `<label for="location" >meal id :</label><br>
    <input type="number" disabled id="meal_id" name="meal_id" value="${params.id}"><br><br>
    
    <input type="submit" id="btn" value="send"></input>`;
    const date = new Date();
    const currentDate = date.toISOString().slice(0, 10);

    document.getElementById("created_date").value = currentDate;
    

   }
   
    
 )
   .catch(error => console.log(error))



   // adding reservation to showen meal

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

   
   
   form.addEventListener("submit",(e)=> {
     e.preventDefault();
     
postData("/api/reservations", {
  contact_name: document.getElementById("name").value,
  contact_phonenumber: document.getElementById("contact_phonenumber").value,
  contact_email: document.getElementById("contact_email").value,
  created_date: document.getElementById("created_date").value,
  meal_id: parseInt(document.getElementById("meal_id").value),
  number_of_guests: parseInt(document.getElementById("number_of_guests").value),
}).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
/* const data = {
  contact_name: document.getElementById("name").value,
  contact_phonenumber: document.getElementById("contact_phonenumber").value,
  contact_email: document.getElementById("contact_email").value,
  created_date: document.getElementById("created_date").value,
  meal_id: parseInt(document.getElementById("meal_id").value),
  number_of_guests: parseInt(document.getElementById("number_of_guests").value),
};
              console.log(data)


  fetch("/api/reservations", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
 */
});





  }