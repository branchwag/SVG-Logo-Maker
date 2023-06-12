//Including packages etc needed for this application
const inquirer = require('inquirer'); 
const Shape = require('./lib/Shape.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');
const Circle = require('./lib/Circle.js');

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//array of questions for user input
const questions = [
    {
        name: "text",
        type: "input",
        message: "Enter up to three characters for text:"
    },
    {
        name: "textColor",
        type: "input",
        message: "Input text color:" //need to figure out valid color selection
    },
    {
        name: "shape",
        type: "list",
        message: "Select shape:",
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Input shape color:" //need to figure out valid color selection
    },
];

//function to handleAnswers
const handleAnswers = (answers) => {

    console.log(answers);

    //if shape is triangle then make triangle
    //if shape is a circle, then make circle
    //if shape is a square, make square

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
}

//Creating a function to initialize app
function init() {
    inquirer
  .prompt(questions).then(handleAnswers);
}

// Function call to initialize app
init();