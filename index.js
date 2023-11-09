import inquirer from "inquirer";
import validate from "validate-color";
import Text from './lib/text'
import { Circle, Triangle, Square } from './lib/shapes'

const { validateHTMLColorHex, validateHTMLColorName } = validate



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
    //incomplete
    }).catch((err) => console.error(err));



// inquirer set up
// Q1: text (max 3 characters)
// Q2: text color (keyword or hexadecimal)
// Q3: shape type
// Q4: shape color (keyword or hexadecimal)

svgGenerator();