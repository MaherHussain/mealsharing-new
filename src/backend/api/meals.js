const express = require("express");
const router = express.Router();
const knex = require("../database");



// get all meals with queries
router.get("/", async (request, response) => {
 
   
    try {
      if (Object.keys(request.query).length === 0) {
        await knex("meals")
          .select("*")
          .then((data) => response.json(data))
          .catch((err) => response.status(400).send("Bad request").end());
      } else if (request.query.maxPrice) {
        await knex("meals")
          .select("title", "price")
          .where("price", "<", Number(request.query.maxPrice))
          .then((data) => response.json(data))
          .catch((err) => response.status(400).send("Bad request").end());
      } else if (request.query.title) {
        let title = request.query.title;
        await knex("meals")
          .select("title")
          .where("title", "like", `%${title}%`)
          .then((data) => response.json(data))
          .catch((err) => response.status(400).send("Bad request").end());
      } else if (request.query.createdAfter) {
        await knex("meals")
          .select("title", "created_date")
          .where("created_date", ">", request.query.createdAfter)
          .then((data) => response.json(data))
          .catch((err) => response.status(400).send("Bad request").end());
      } else if (request.query.limit) {
        await knex("meals")
          .select("title")
          .limit(parseInt(request.query.limit))
          .then((data) => response.json(data))
          .catch((err) => response.status(400).send("Bad request").end());
      } else if (request.query.availableReservations) {
        if (request.query.availableReservations ==="true"){

          return await knex("meals")
            .select("meals.*")
            .count("reservations.id as availablereservations")
            .leftJoin("reservations", "meals.id", "=", "reservations.meal_id")
            .groupBy("meals.id")
            .having(
              knex.raw("meals.max_reservations > count(reservations.meal_id)")
            )
            .then((data) => response.json(data))
            .catch((err) => response.status(400).send("Bad request").end());
        }
      }
  
    } catch (error) {
      throw error;
    }

  
  
});



// adding a new meals 
router.post("/", async (request, response) => {
   creatNewMeal({
    body :request.body
  })
.then((result) => response.json(result))
.catch(error=>{
  response.status(400).send("Bad request")
  console.log(error)
})
});

const creatNewMeal = async({body})=>{
  const { title, description, location, when, max_reservations, price, created_date} = body;
return await knex("meals").insert({
  title,
  description,
  location,
  when,
  max_reservations,
  price,
  created_date,
});
}

// return meal by Id 
const getMealById = async ({id,body}) => {
  try {
    const {
      title,
      description,
      location,
      when,
      max_reservations,
      price,
      created_date,
    } = body;
    return await knex("meals").where({id:id}).select("*");
  } catch (error) {
    console.log(error);
  }
};
router.get("/:id", async (request, response) => {
  getMealById({
    id:request.params.id,
    body:request.body})
    .then((result) => response.json(result))
    .catch((ex) => {
      response.status(400).send("Bad request").end();
      console.log(ex);
    });
});


// update meal by id 
router.put("/:id", async (request, response) => {
  editMeal({
    body: request.body,
    id: request.params.id,
  })
    // @ts-ignore
    .then((result) => {
      console.log(result);
      return response.json(result);
    })
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
const editMeal = async ({ body, id }) => {
  const {
    title,
    description,
    location,
    when,
    max_reservations,
    price,
    created_date,
  } = body;

  const meal = await knex("meals").select("*").where({ id: id });
  console.log(meal);
  if (meal.length === 0) {
    // @ts-ignore
    throw new HttpError("Bad request", `meal not found: ID ${id}!`, 404);
  }
  const queryDto = {
    title: title,
    description: description,
    location: location,
    when: when,
    max_reservations: max_reservations,
    price: price,
    created_date: created_date,
  };
  if (Object.keys(queryDto).length !== 0) {
    return knex("meals")
      .where({
        id: id,
      })
      .update(queryDto);
  } else return "Nothing updated!";
};



//delete meals
router.delete("/:id", async (request, response) => {
  deleteMeal({
    body: request.body,
    id: request.params.id,
  })
    // @ts-ignore
    .then((result) => {
      return response.json(result);
    })
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
const deleteMeal = async ({ body, id }) => {
  const {
    title,
    description,
    location,
    when,
    max_reservations,
    price,
    created_date,
  } = body;

  const meals = await knex("meals").select("*").where({
    id: id,
  });

  if (meals.length === 0) {
    // @ts-ignore
    throw new HttpError("Bad request", `meal not found: ID ${id}!`, 404);
  }

  if (meals.length !== 0) {
    return knex("meals")
      .where({
        id: id,
      })
      .delete(meals);
  } else return "Nothing deleted!";
};




module.exports = router;
