const inquirer = require('inquirer')
const { validateHTMLColorHex, validateHTMLColorName } = require('validate-color')
const Text = require('./lib/text.js')
const { Circle, Triangle, Square } = require('./lib/shapes.js')
const fs = require('fs')
const path = require('path')



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
                svgShape = new Circle(answers.shapeColor, 80);
                break
            case 'Triangle':
                svgShape = new Triangle(answers.shapeColor);
                break
            case 'Square':
                svgShape = new Square(answers.shapeColor, 100)
                break
        };

        return `<svg version = '1.1' width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
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

svgGenerator();