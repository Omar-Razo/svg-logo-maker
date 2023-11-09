const Shape = require('./shape')

// Create Circle Class
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    setRadius(radius) {
        this.radius = radius
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`
    }
};

// Create Triangle Class
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`
    }
};

// Create Square Class
class Square extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    render() {
        return `<rect x="100" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }
};

module.exports = { Circle, Triangle, Square }