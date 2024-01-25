const { Circle, Square, Triangle } = require(`./lib/shapes`);
const fs = require("fs");

async function generateSvg(logoText, logoTextColour, shape, shapeColour) {
  try {
    if (shape === `Circle`) {
      const newShape = new Circle(shapeColour);
      const renderedShape = newShape.render();
      const SvgHtml = `<svg width="300" height="200">
        ${renderedShape}
        <text x="50%" y="50%" text-anchor="middle" font-size="50" fill="${logoTextColour}">${logoText}</text>
        </svg>`;
      return SvgHtml;
    } else if (shape === `Square`) {
      const newShape = new Square(shapeColour);
      const renderedShape = newShape.render();
      const SvgHtml = `<svg width="300" height="200">
        ${renderedShape}
        <text x="50%" y="50%" text-anchor="middle" font-size="50" fill="${logoTextColour}">${logoText}</text>
        </svg>`;
      return SvgHtml;
    } else if (shape === `Triangle`) {
      const newShape = new Triangle(shapeColour);
      const renderedShape = newShape.render();
      const SvgHtml = `<svg width="300" height="200">
        ${renderedShape}
        <text x="50%" y="50%" text-anchor="middle" font-size="50" fill="${logoTextColour}">${logoText}</text>
        </svg>`;
      return SvgHtml;
    }
  } catch (error) {
    console.error("Error occured:", error);
    throw error;
  }
}

async function runPrompt() {
  try {
    const { default: inquirer } = await import("inquirer");
    const inputs = await inquirer.prompt([
      {
        type: "input",
        name: "logoText",
        message:
          "Enter a maximum of three characters to be displayed on the logo",
      },
      {
        type: "input",
        name: "logoTextColour",
        message:
          "Enter a colour for the text, can be a colour keyword or hexadecimal number",
      },
      {
        type: "list",
        name: "shape",
        message: "Enter a shape to display as the logo",
        choices: [`Circle`, `Square`, `Triangle`],
      },
      {
        type: "input",
        name: "shapeColour",
        message:
          "Enter a colour for the shape, can be a colour keyword or hexadecimal number",
      },
    ]);

    const generatedSvg = await generateSvg(
      inputs.logoText,
      inputs.logoTextColour,
      inputs.shape,
      inputs.shapeColour
    );
    fs.writeFileSync("logo.svg", generatedSvg);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Error occured:", error);
    throw error;
  }
}

runPrompt();
