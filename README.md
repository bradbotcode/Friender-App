# Friender
Survey Based Friend Matching Application

## Description

*Friender* is a survey based friend matching application. The user responds to 10 questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, the user's answers are measured against other user answers and a match is determined based on similarity. Similarity is defined as the lowest absolute difference in response value for all ten questions combined.

*Friender* is built with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the backend. 

## Demo
	
*Friender* is deployed to Heroku. Please demo it [here](https://salty-fjord-67098.herokuapp.com/).

## Installation

To install the application follow the instructions below:

	git clone https://github.com/bradbotcode/Friender-App.git
	cd friender-app
	npm install
	
## Running Locally

This app is setup to run locally on `PORT 3000`. You can access it from your browser at the URL, `localhost:3000`, once installed.
	
Be sure to run the Node.js application with the following command:

	node server.js
