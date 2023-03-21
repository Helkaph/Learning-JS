export default class Text {
    constructor(text) {
        this.text = text;
    }
    getSymbols() {
        return this.text.length;
    }
    getLetters() {
        return this.text.split(' ').join('').split('.').join('').length;;
    }
    getSpaces() {
        let arrayText = this.text.split('');
        let count = 0;
        for (let i = 0; i < arrayText.length; i++) {
            if (arrayText[i] == ' ') {
                count++;
            }
        }
        return count;
    }
    getWithoutSpaces() {
        return this.text.split(' ').join('').length;
    }
    getWords() {
        return this.text.split(' ').length;
    }
    getSentences() {
        return this.text.split('.').length;
    }
}
