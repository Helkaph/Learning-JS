export default class Circle {
    #radius;
    _Pi = 3.14;
    constructor(radius) {
        this.#radius = radius;
    }
    getSquare() {
        return this._Pi * (this.#radius ** 2);
    }
    getLength() {
        return this._Pi * this.#radius * 2;
    }
}