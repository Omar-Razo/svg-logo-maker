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
        return `<circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />`
    }
};

// Create Triangle Class
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,25 50,150 250,150" fill="${this.color}" />`
    }
};

// Create Square Class
class Square extends Shape {
    constructor(color, length) {
        super(color);
        this.width = length;
        this.height = length;
    }

    setLength(length) {
        this.width = length;
        this.height = length;
    }

    render() {
        return `<rect x="100" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }
};

module.exports = {
    Circle,
    Triangle,
    Square
}