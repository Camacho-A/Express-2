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

	// DRY Code
	// parseInt to change from string number to a number number
	const total = parseInt(request.params.total)
	const tipPercentage = parseInt(request.params.tipPercentage)
	const tip = .01
	response.send(`tip total ${(tipPercentage * tip) * total}`)
})


// ---- Magic 8 Ball -----
app.get("/magic/:question", (request, response) => {
	const magicBall = [
			"It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes definitely",
			"You may rely on it",
			"As I see it yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful",
	]

	const random = magicBall[Math.floor(Math.random() * magicBall.length)]

	response.send(`Question: ${request.params.question}?
	<h1>${random}</h1>`)
})


// ---------- Listen pn port ------------
app.listen(process.env.PORT, () => {
	console.log("listening in port 3000")
})
