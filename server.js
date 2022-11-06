require("dotenv").config()

// --------- Require express & set app -----------
const express = require("express")
const app = express()

// --- Greeting route -------
app.get("/greeting", (request, response) => {
	response.send("Hello, stranger")
})

// ----- Greeting route with param --------
app.get("/greeting/:name", (request, response) => {
	response.send(`What's up ${request.params.name}`)
})
 
// ---- Tip calculator ------
app.get("/tip/:total/:tipPercentage", (request, response) => {
	const total = parseInt(request.params.total)
	const tipPercentage = parseInt(request.params.tipPercentage)
	const tip = .01
	response.send(`tip total ${(tipPercentage * tip) * total}`)
})













// ---------- Listen pn port ------------
app.listen(process.env.PORT, () => {
	console.log("listening in port 3000")
})
