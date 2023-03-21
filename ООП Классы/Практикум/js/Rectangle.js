export default class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    getSquare() {
        return this.#width * this.#height;
    }
    getPerimeter() {
        return 2 * (this.#width + this.#height);
    }
    getRatio() {
        return this.getSquare() / this.getPerimeter();
    }
}