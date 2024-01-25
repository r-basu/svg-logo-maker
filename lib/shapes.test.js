const { Circle, Square, Triangle } = require(`./shapes`);

describe(`Circle Class`, () => {
  test(`Render function returns a Circle matching SVG html with correct colour inputted`, () => {
    const shape = new Circle(`blue`);
    const renderedShape = shape.render();
    expect(renderedShape).toBe(
      `<circle cx="150" cy="150" r="100" fill="blue"/>`
    );
  });
});

describe(`Square Class`, () => {
  test(`Render function returns a Square matching SVG html with correct colour inputted`, () => {
    const shape = new Square(`green`);
    const renderedShape = shape.render();
    expect(renderedShape).toBe(
      `<rect> x="50" y="50" height="150" width="150" fill="green"/>`
    );
  });
});

describe(`Triangle Class`, () => {
  test(`Render function returns a Triangle matching SVG html with correct colour inputted`, () => {
    const shape = new Triangle(`red`);
    const renderedShape = shape.render();
    expect(renderedShape).toBe(
      `<polygon points="150, 18 244, 182 56, 182" fill="red"/>`
    );
  });
});
