class Text {
    constructor(content, color) {
        this.content = content;
        this.color = color;
    }

    setContent(content) {
        this.content = content;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<text x="50%" y="50%" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${this.color}">${this.content}</text>`
    }
};

module.exports = Text