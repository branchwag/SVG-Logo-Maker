const Shape = require("./Shape.js")
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');


describe("Square", () => {
    describe("render", () => {
        it("should render a square shape", () => {
            const shape = new Square();
            const data = {
                text: 'xyz',
                textColor: 'white',
                shape: 'Square',
                shapeColor: 'pink'
              }
            expect(shape.render(data)).toContain(`<rect width="160" height="160" fill="${data.shapeColor}" />`);
        })

    })
})
