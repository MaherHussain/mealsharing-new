window.handleHomeRequest = () => {
  document.body.innerHTML = ` <header>
  <h4>Welcome to meal-sharing applicaion -</h4>
  <p>this is my first app using node js - </p>
</header>


  <h1>Home</h1>
  <a href="meals" data-navigo>Meals</a>
  asd
  <a href="meal/1" data-navigo>meal/1</a>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
