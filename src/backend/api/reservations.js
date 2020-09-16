const express = require("express");
const router = express.Router();
const knex = require("../database");
// get all reservations 
router.get("/",async (req,res)=> {
    try{
        const reservations = await knex("reservations").select("*");
        res.json(reservations);
    }catch(err){
        throw err;
       
    }
})

//add new reservation 
router.post("/", async (req, res) => {
 craetReservation({
     body: req.body
 })
 .then( (data)=> res.json(data))
 .catch((error) => res.status(400).send(error) )

});
const craetReservation = ({body})=>{
    const {
      number_of_guests,
      meal_id,
      created_date,
      contact_phonenumber,
      contact_name,
      contact_email,
    } = body;
    try{
         return knex("reservations").insert({
           number_of_guests,
           meal_id,
           created_date,
           contact_phonenumber,
           contact_name,
           contact_email,
         });

    }
    catch(error){
        console.log(error)
    }
   
    
}

// get reservation by id 

const getreservationById = async ({ id, body }) => {
  try {
    const {
      number_of_guests,
      meal_id,
      created_date,
      contact_phonenumber,
      contact_name,
      contact_email,
    } = body;
    return await knex("reservations").where({ id: id }).select("*");
  } catch (error) {
    console.log(error);
  }
};
router.get("/:id", async (req, res) => {
  getreservationById({
    id: req.params.id,
    body: req.body,
  })
    .then((data) => res.json(data))
    .catch((ex) => {
      res.status(400).send("Bad request").end();
      console.log(ex);
    });
});


// update reservation
router.put("/:id", async (request, response) => {
  editReservation({
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
const editReservation = async ({ body, id }) => {
  const {
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email,
  } = body;

  const reservation = await knex("reservations").select("*").where({ id: id });
  console.log(reservation);
  if (reservation.length === 0) {
    // @ts-ignore
    throw new HttpError("Bad request", `reservation not found: ID ${id}!`, 404);
  }
  const queryDto = {
    number_of_guests: number_of_guests,
    meal_id: meal_id,   
    created_date:created_date,
    contact_phonenumber:contact_phonenumber,
    contact_name:contact_name,
    contact_email:contact_email,
  };
  if (Object.keys(queryDto).length !== 0) {
    return knex("reservations")
      .where({
        id: id,
      })
      .update(queryDto);
  } else return "Nothing updated!";
};

//delete reservations
router.delete("/:id", async (request, response) => {
  deleteReservation({
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
const deleteReservation = async ({ body, id }) => {
  const {
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email,
  } = body;

  const reservation = await knex("reservations").select("*").where({
    id: id,
  });

  if (reservation.length === 0) {
    // @ts-ignore
    throw new HttpError("Bad request", `reservation not found: ID ${id}!`, 404);
  }

  if (reservation.length !== 0) {
    return knex("reservations")
      .where({
        id: id,
      })
      .delete(reservation);
  } else return "Nothing deleted!";
};

module.exports =router
