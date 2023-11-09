export class Text {
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
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`
    }
};