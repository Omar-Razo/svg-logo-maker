const { Triangle, Square, Circle } = require('./shapes')

describe('Render Tests', () => {
    
    describe('Triangle Render', () => {
        it('should return the shape/polygon svg element that includes the color passed through', () => {
            const shape = new Triangle();
            shape.setColor('blue');

            expect(shape.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />')
        });
    });

    describe('Square Render', () => {
        it('should return the shape/polygon svg element that includes the color and side length passed through', () => {
            const shape = new Square();
            shape.setColor('#44AD6C');
            shape.setLength(50);

            expect(shape.render()).toEqual('<rect x="100" y="50" width="50" height="50" fill="#44AD6C" />')
        });
    });

    describe('Circle Render', () => {
        it('should return the shape/polygon svg element that includes the color and radius passed through', () => {
            const shape = new Circle();
            shape.setColor('antiquewhite');
            shape.setRadius(50);

            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="antiquewhite" />')
        });
    });
})