

// @ts-ignore
window.handleHomeRequest = () => {
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

<!-- ---------------------start slider ---------------------------------------->

   <section class="home-slider owl-carousel img" style="background-image: url(images/bg_1.jpg);">
      <div class="slider-item">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text align-items-center" data-scrollax-parent="true">

            <div class="col-md-6 col-sm-12 ftco-animate">
            	<span class="subheading">Delicious</span>
              <h1 class="mb-4">mealSharing Application </h1>
              <p class="mb-4 mb-md-5">we have a collaction of meals you will like it .</p>
            
            </div>
            <div class="col-md-6 ftco-animate">
            	<img src="../images/cherries.jpg" class="img-fluid" alt="">
            </div>

          </div>
        </div>
      </div>

      <div class="slider-item">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text align-items-center" data-scrollax-parent="true">

            <div class="col-md-6 col-sm-12 order-md-last ftco-animate">
            	<span class="subheading">wellcome</span>
              <h1 class="mb-4">mealSharing Application </h1>
              <p class="mb-4 mb-md-5">let's eat.</p>
            </div>
            <div class="col-md-6 ftco-animate">
            	<img src="../templateFiles/images/bg_2.png" class="img-fluid" alt="">
            </div>

          </div>
        </div>
      </div>

      <div class="slider-item" style="background-image: url(../templateFiles/images/bg_3.jpg);">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

            <div class="col-md-7 col-sm-12 text-center ftco-animate">
            	<span class="subheading">Welcome</span>
              <h1 class="mb-4">We cooked your desired meal Recipe</h1>
              <p class="mb-4 mb-md-5">let's do that</p>
            </div>

          </div>
        </div>
      </div>
    </section>
    

<!-- ---------------------END slider ---------------------------------------->

<!-- ---------------------------contact info section start ------------->

<section class="ftco-intro">
    	<div class="container-wrap">
    		<div class="wrap d-md-flex">
	    		<div class="info">
	    			<div class="row no-gutters">
	    				<div class="col-md-4 d-flex ftco-animate">
	    					<div class="icon"><span class="icon-phone"></span></div>
	    					<div class="text">
	    						<h3>000 (123) 456 7890</h3>
	    						<p>A small river named Duden flows</p>
	    					</div>
	    				</div>
	    				<div class="col-md-4 d-flex ftco-animate">
	    					<div class="icon"><span class="icon-my_location"></span></div>
	    					<div class="text">
	    						<h3>solgårdsvej 3c st</h3>
	    						<p> 8660 Skanderborg</p>
	    					</div>
	    				</div>
	    				<div class="col-md-4 d-flex ftco-animate">
	    					<div class="icon"><span class="icon-clock-o"></span></div>
	    					<div class="text">
	    						<h3>Open Monday-Friday</h3>
	    						<p>8:00am - 9:00pm</p>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    		<div class="social d-md-flex pl-md-5 p-4 align-items-center">
	    			<ul class="social-icon">
              <li class="ftco-animate text-dark"><a href="#"><span class="icon-twitter text-dark"></span></a></li>
              <li class="ftco-animate text-dark"><a href="#"><span class="icon-facebook text-dark"></span></a></li>
              <li class="ftco-animate text-dark"><a href="#"><span class="icon-github text-dark"></span></a></li>
            </ul>
	    		</div>
    		</div>
    	</div>
    </section>
    <!-- ---------------------------contact info section end ------------->

<!-- ---------------------------menu start ------------->

 <section class="ftco-menu">
    	<div class="container-fluid">
    		
	    		<div class=" ftco-animate p-md-5">
                    <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-12">
                              <h2>
                                  Our Meals
                              </h2>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-12">
                              <form  >
                                        <input type="text" name="search" id="search" placeholder="search...." />
                                </form>
                            </div>
                    
                    </div>
		    	
		              	<div class="row" id="goods">
		              	
		              	
		              	</div>
		              </div>

		           
		    </div>
    	</div>
    </section>


     <footer class="ftco-footer ftco-section img">
     <div class="overlay"></div>
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Us</h2>
              <p>Mealsharing Application using node.js</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
               
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-github"></span></a></li>
              </ul>
            </div>
          </div>
           <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">Skanderborg</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">maherhussain6@gmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        </div>
  <p id="copyright">&#xa9; Copy Rights </p>
      </footer>-->



<!-- ---------------------------menu end ------------->

 

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
        	<div class="col-md-4 text-center">
		              			<div class="menu-wrap">
		              				<a href="#" class="menu-img img mb-4" style="background-image: url(../images/${randomImg});"></a>
		              				<div class="text">
		              					<h3><a href="#">${meal.title}</a></h3>
		              					<p>${meal.description}</p>
                            <p class="price"><span>${meal.price} DKK</span></p>
                             <p>
                             <a  class="btn btn-primary p-3 px-xl-4 py-xl-3 reserve " data-id="${meal.id}">reserve</a>
                             <a href="#" class="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">review</a>
                              </p>
		              					 
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

  // @ts-ignore
  router.updatePageLinks();
}
};