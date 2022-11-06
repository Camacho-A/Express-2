require("dotenv").config()

// --------- Require express & set app -----------
const express = require("express")
const app = express()

// --- Greeting route -------
app.get("/greeting", (request, response) => {
	response.send("Hello, stranger")
})

// ----- route with param --------
app.get("/greeting/:name", (request, response) => {
	response.send(`What's up ${request.params.name}`)
})

// ---------- Listen pn port ------------
app.listen(process.env.PORT, () => {
	console.log("listening in port 3000")
})
