class Shape {
    constructor(color) {
        // this.shapeColor = shapeColor;
        // this.textColor= textcolor;
        // this.text = text;
        this.color = color;
      }

    setShapeColor(data) {
        this.color = data.shapeColor;
    }

}

module.exports = Shape;