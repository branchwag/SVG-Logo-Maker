const Shape = require("./Shape.js")
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');


describe("Circle", () => {
    describe("render", () => {
        it("should render a circle shape", () => {
            const shape = new Circle();
            const data = {
                text: 'xyz',
                textColor: 'white',
                shape: 'Circle',
                shapeColor: 'pink'
              }
            expect(shape.render(data)).toContain(`<circle cx="100" cy="100" r="80" fill="${data.shapeColor}" />`);
        })

    })
})
