class Circle {
  constructor(colour) {
    // Adding hard code values but in variables to change for user input later on
    // Allows for customization of shape.
    this.cx = "100";
    this.cy = "100";
    this.r = "100";
    this.colour = colour;
  }
  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.colour}"/>`;
  }
}

class Square {
  constructor(colour) {
    this.x = "50";
    this.y = "50";
    this.width = "100";
    this.height = "100";
    this.colour = colour;
  }
  render() {
    return `<rect x="${this.x}" y="${this.y}" height="${this.height}" width="${this.width}" fill="${this.colour}"/>`;
  }
}

class Triangle {
  constructor(colour) {
    this.polygonPoints = "150, 18 244, 182 56, 182";
    this.colour = colour;
  }
  render() {
    return `<polygon points="${this.polygonPoints}" fill="${this.colour}"/>`;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
