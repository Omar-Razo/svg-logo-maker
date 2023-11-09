import inquirer from "inquirer";
import validate from "validate-color";
import { Text } from './lib/text.js'
import { Circle, Triangle, Square } from './lib/shapes.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";

const { validateHTMLColorHex, validateHTMLColorName } = validate
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const svgGenerator = () => inquirer.prompt([
    {
        type: 'input',
        message: 'Choose up to 3 characters for your text (Alphanumeric): ',
        name: 'text',
        validate(answer) {
            const regex = /^\w{3}$/
            return answer.length <= 3 && regex.test(answer) ? true : 'Please choose only 3 alphanumeric characters'
        }
    },
    {
        type: 'input',
        message: 'Choose a color for your text (keyword or hexadecimal: use a "#" for hex ',
        name: 'textColor',
        validate(answer) {
            if (validateHTMLColorHex(answer) || validateHTMLColorName(answer)) {
                return true
            } else {
                return 'Improper name or hexadecimal entry. Please try again.'
            }
        }
    },
    {
        type: 'list',
        message: 'Choose a shape type: ',
        name: 'shape',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ]
    },
    {
        type: 'input',
        message: 'Choose a color for your shape (keyword or hexadecimal: use a "#" for hex ',
        name: 'shapeColor',
        validate(answer) {
            if (validateHTMLColorHex(answer) || validateHTMLColorName(answer)) {
                return true
            } else {
                return 'Improper name or hexadecimal entry. Please try again.'
            }
        }
    }
    ])
    .then((answers) => {
        let svgShape;
        const svgText = new Text(answers.text, answers.textColor)

        switch (answers.shape) {
            case 'Circle':
                svgShape = new Circle(answers.shapeColor, 50);
                break
            case 'Triangle':
                svgShape = new Triangle(answers.shapeColor);
                break
            case 'Square':
                svgShape = new Square(answers.shapeColor, 50)
                break
        };

        return `<svg version = '1.1' width="300" height="200">
        
        ${svgShape.render()}

        ${svgText.render()}

        </svg>`
    })
    .then((svg) => {
        fs.writeFile(path.join(__dirname, '.', 'examples', 'logo.svg'), svg, (err) => 
                err ? console.error(err) : console.log('Generated logo.svg.')
            )
    })
    .catch((err) => console.error(err));



// inquirer set up
// Q1: text (max 3 characters)
// Q2: text color (keyword or hexadecimal)
// Q3: shape type
// Q4: shape color (keyword or hexadecimal)

svgGenerator();