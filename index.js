const {Circle, Square, Triangle} = require(`./lib/shapes`)
const fs = require('fs')
const inquirer = require('inquirer')

function generateSvg(logoText, logoTextColour, shape, shapeColour) {
    if (shape === `Circle`) {
        const newShape = new Circle(shapeColour)
        const renderedShape = newShape.render();
        const SvgHtml = `
        <svg width="300" height="300">
        ${renderedShape}
        <text x="50%" y="50%" text-anchor="middle" font-size="20" fill="${logoTextColour}">${logoText}</text>
        </svg>
        `
        return SvgHtml;
    }
}