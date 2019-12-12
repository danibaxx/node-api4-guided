const express = require("express")
// moved to package.json with the -r flag(require) with dotenv/config
// this is better to use when running it locally but not during production
// const dotenv = require('dotenv');

// dotenv.config()

const app = express()
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 8080

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
		cohort: process.env.LAMBDA_COHORT,
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})