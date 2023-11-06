import inquirer from "inquirer";
import validate from "validate-color";
const { validateHTMLColorHex, validateHTMLColorName } = validate


const svgGenerator = () => inquirer.prompt([
    {
        type: 'input',
        message: 'Choose up to 3 characters for your text: ',
        name: 'text',
        validate(answer) {
            const regex = /[a-zA-z0-9_]{3}/
            return answer.length <= 3 ? true : 'Please choose only 3 characters'
        }
    },
    {
        type: 'input',
        message: 'Choose a color for your text (keyword or hexadecimal: ',
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
        message: 'Choose a color for your shape (keyword or hexadecimal: ',
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

}).catch((err) => console.error(err));


// inquirer set up
// Q1: text (max 3 characters)
// Q2: text color (keyword or hexadecimal)
// Q3: shape type
// Q4: shape color (keyword or hexadecimal)

svgGenerator();