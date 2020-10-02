

window.handleHomeRequest = () => {
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
<h4>Welcome to meal-sharing applicaion -</h4> <br>
  <p>let's eat- </p>
   </div>
  
</header>
 
<div class="home-div container">
  <h1 >Home page</h1>
   
     <form  >
         <input type="text" name="search" id="search" placeholder="search...." />
      </form>
                            
  <div class="mt-5">
  <div class="row" id="goods">
  
  </div>
  </div> 
  </div>
  
   </div>
   <footer class="w3-center w3-light-grey w3-padding-32">
  <p id="copyright">&#xa9; Copy Rights </p>
</footer>

  `;
function year (){
  const copyright = document.getElementById("copyright");
  copyright.innerHTML += new Date().getFullYear() + " by MaherHussain";
}
window.onload= function() {year();}

 const meals = async () => {
   try{
await fetch("/api/meals")
.then((response) => response.json())
.then(data => {
  renderMeals(data);
  myFun(data);
});

   }
   catch(error){
     console.log(error)
   }

 } 

meals();


/*  fetch("/api/meals").then((response) => response.json()).then(data => renderMeals(data)).catch(error => console.log(error)); 
 */  
const reservation =async  () => {
  try {
    await fetch("/api/reservations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  } catch (error) {
    console.log(error);
  }
}; 




  function myFun(meals) {
    const searchbar = document.getElementById("search");
    searchbar.addEventListener("keyup", (e) => {
      /* console.log(meals) */
      let searchWord = e.target.value.toLowerCase();
      const searchResult = meals.filter((meal) => {
        return meal.title.toLowerCase().includes(searchWord);
        
        
      });
      row.innerHTML = "";
    
      renderMeals(searchResult)
      
    });
  }
const row = document.getElementById("goods");
const search = document.getElementById("search");

  const renderMeals = async (meals) => {
      const images = [
        "cherries.jpg",
        "croissant.jpg",
        "popsicle.jpg",
        "salmon.jpg",
        "sandwich (1).jpg",
        "sandwich.jpg",
        "steak.jpg",
        "wine.jpg",
      ];
     
  
     meals.forEach((meal) => {
       let randomImg = images[Math.floor(Math.random() * images.length)];
       row.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5">
  
       <div class="card" style="width: 18rem;">
        <h5 class="card-title pt-3">${meal.title}</h5>

       <img class="card-img-top" src="../images/${randomImg}" alt="Card image cap"></img>
          <div class="card-body">
            
              <p class="card-text">${meal.description}</p>
              <p class="card-text">${meal.price} DKK</p>
              <a  class="btn btn-dark reserve" data-id="${meal.id}">reserve</a>
              <a href="#" class="btn btn-dark">review</a>
          </div>
      </div>
      </div>
     `;
     
      const reservBtn = document.getElementsByClassName("reserve");
     for(let i= 0; i<reservBtn.length ; i++){
        reservBtn[i].addEventListener("click", async () => {
          console.log(reservBtn[i].getAttribute("data-id"));

          try {
            await fetch("/api/meals?availableReservations=true")
              .then((response) => response.json())
              .then((meals) => {
                const mealAvailable = meals.find((availableMeal) => {
                  console.log(meal.id);
                  return (
                    availableMeal.id == reservBtn[i].getAttribute("data-id")
                  );
                });
                if (mealAvailable) {
                  /* console.log("hello"); */
                   window.location.href = `/meal/${reservBtn[i].getAttribute(
                     "data-id"
                   )}`;
                  /* reservBtn[i].add.setAttribute("href",`/meal/${meal.id}`); */
                } else {
                  alert("sorry ! , this meal is not available to reserve ");
                }
              });
          } catch (err) {
            console.log(err);
          }
        });

     }
      

       
       
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

  /* <a href="meal/1" data-navigo>
  meal/1
</a>;  */
  // if any links are added to the dom, use this function
  // make the router handle those links.
  // @ts-ignore
  router.updatePageLinks();
}
};