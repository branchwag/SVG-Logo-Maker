const Shape = require('../lib/Shape.js');
const Triangle = require('../lib/Triangle.js');
const Square = require('../lib/Square.js');
const Circle = require('../lib/Circle.js');

function generateLogo(data) {
    if (data.shape === "Circle") {
        const circleLogo = new Circle()
        return circleLogo.render(data);
      } else if (data.shape === "Triangle") {
        const triangleLogo = new Triangle()
        return triangleLogo.render(data);
      } else {
        const squareLogo = new Square()
        return squareLogo.render(data);
      }
}

module.exports = generateLogo;

//Criteria for reference: 
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