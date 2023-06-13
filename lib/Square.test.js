const Shape = require("./Shape.js")
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');

describe("Square", () => {
    describe("init", () => {
        it("should make a square object with the correct properties", () => {
            // arrange
            const text = "xyz";
            const textColor = "white";
            const shapeColor = "pink"
            // act
            const square = new Square(text, textColor, shapeColor);
            // assert
            expect(square instanceof Square).toBe(true)
            expect(square).toEqual({ text: text, textColor: textColor, shapeColor: shapeColor})
        })
    })
    describe("render", () => {
        it("should render a square shape", () => {
            //arrange
            const text = "xyz";
            const textColor = "white";
            const shapeColor = "pink";

            //act
            const shape = new Square(text, textColor, shapeColor);

            //assert
            expect(shape.render()).toContain(`<rect width="160" height="160" fill="${shapeColor}" />`);
        })

    })
})
