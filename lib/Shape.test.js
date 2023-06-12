const Shape = require("../lib/Shape.js")

describe("Shape", () => {
    describe("render", () => {
        it("should render a triangle shape", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })

    })
})

