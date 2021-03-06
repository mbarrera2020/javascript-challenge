# javascript-challenge
JavaScript and DOM Manipulation

Author: Maria Barrera
Date: 03/28/2021

## Dataset:  UFO Sightings Data
Sample:
var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },.....

## Level 1: Automatic Table and Date Search (Required)

Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

## Level 2: Multiple Search Categories (Optional)

Complete all of Level 1 criteria.

Using multiple input tags and/or select dropdowns, write JavaScript code so the user can set multiple filters and search for UFO sightings using the following criteria based on the table columns:

date/time
city
state
country
shape

Assumption:  Data selection will be done using the "OR" operator.
