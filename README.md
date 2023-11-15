# Module Ten Challenge: SVG Logo Maker

## Description
A command line node app that takes user input to generate a simple svg logo. 

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input:

WHEN I am prompted for text
THEN I can enter up to three characters

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`

AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following is a link to a video walkthrough of the app in use as well as render tests:

https://youtu.be/n0q862Pd2Ho


Screenshots of the app in use and example svg:

![screenshot of command line interface asking the user questions about the svg they would like to make](./Images/SVG%20example.PNG)

![Example of svg file created using app. the text "git" in dark orange inside a black circle](./Images/svg%20example%20output.PNG)


## Installation
1. `npm i` or `npm install` to download dependencies.
2. `node index.js` to run app. svg created by app will be in `examples` folder.

## Credits

Validate Color package/documentation for validating color name/hex user entry:

https://www.npmjs.com/package/validate-color

Inquirer Documentation:

https://www.npmjs.com/package/inquirer

Phind for debugging:

https://www.phind.com/