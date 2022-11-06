require("dotenv").config()

const { request, response } = require("express")
// --------- Require express & set app -----------
const express = require("express")
const app = express()


app.get("/", (request, response) => {
	response.send(`99 Bottles of beer on the wall
    <a href="/98">Take One Down & Pass it Around</a>`)
})

// --- have to come first in the code, otherwise it will not work.

app.get("/0", (request, response) => {
	response.send(`0 Bottles of beer on the wall
    <a href="/">Start over</a>`)
})


app.get("/:number_of_bottles", (request, response) => {
	const bottleTotals = request.params.number_of_bottles
	const oneBottleLess = bottleTotals - 1

	response.send(`${request.params.number_of_bottles} Bottles of beer on the wall.
    <a href="/${oneBottleLess}">Take One Down & Pass it Around</a>`)
})

// ---------- Listen pn port ------------
app.listen(process.env.PORT, () => {
	console.log("listening in port 3001")
})

