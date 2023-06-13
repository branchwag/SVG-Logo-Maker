const Shape = require("./Shape.js")
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');


describe("Circle", () => {
    describe("render", () => {
        it("should render a circle shape", () => {
            //arrange
            const text = "abc";
            const textColor = "white";
            const shapeColor = "purple";

            //act 
            const shape = new Circle(text, textColor, shapeColor);

            expect(shape.render()).toContain(`<circle cx="100" cy="100" r="80" fill="${shapeColor}" />`);
        })

    })
})
