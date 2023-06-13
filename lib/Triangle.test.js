const Shape = require("./Shape.js")
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');


describe("Triangle", () => {
    describe("render", () => {
        it("should render a triangle shape", () => {
            //arrange 
            const text = "lmb";
            const textColor = "pink";
            const shapeColor = "green";

            //act
            const shape = new Triangle(text, textColor, shapeColor);

            //assert
            expect(shape.render()).toContain(`<polygon points="50 15, 100 100, 0 100" fill="${shapeColor}" />`);
        })

    })
})

