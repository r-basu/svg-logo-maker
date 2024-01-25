class Circle {
    constructor(colour) {
        // Adding hard code values but in variables to change for user input later on
        // Allows for customization of shape.
        this.cx = "150";
        this.cy = "150";
        this.r = "100";
        this.colour = colour;
    }
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.colour}"/>`
    }
}

class Square {
    constructor(colour) {
        this.x = "50"
        this.y = "50"
        this.width = "150"
        this.height = "150"
        this.colour = colour;
    }
    render() {
        return `<rect> x="${this.x}" y="${this.y}" height="${this.height}" width="${this.width}" fill="${this.colour}"/>`
    }
}

class Triangle {
    constructor(colour) {
        this.polygonPoints = "50 15, 100 100, 0 100"
        this.colour = colour;
    }
    render() {
        return `<polygon points="${this.polygonPoints}" fill="${this.colour}"/>`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
}