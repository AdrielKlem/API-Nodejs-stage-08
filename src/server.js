const express = require("express");

const app = express();

app.post("/users", (request, response) => {

    response.send("Você chamou o POST")
});

const PORT = 3333; // Door to localize 

app.listen(PORT/* Waiter */, () => console.log(`Server is running on Port ${PORT}`));
