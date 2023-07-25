import { randomRange } from "./ext-math.js";

export default class PasswordGenerator {

    #setUpperAlphabet = [];
    #setLowerAlphabet = [];
    #setNumbers = [];
    #setSymbols = [];

    constructor() {
        const a = 'A'.charCodeAt(0);

        for (let i = 0; i < 26; i++) {
            const alphabet = String.fromCharCode(a + i);
            this.#setUpperAlphabet.push(alphabet);
            this.#setLowerAlphabet.push(alphabet.toLowerCase());
        }

        for (let i = 0; i < 10; i++) {
            this.#setNumbers.push(i.toString());
        }

        "!@#$%^&*()+".split("").forEach((symbol) => this.#setSymbols.push(symbol));
    }

    getRandomPassword(parms) {
        let chars = [];

        if (parms.pwInUpper) chars.push(...this.#setUpperAlphabet);
        if (parms.pwInLower) chars.push(...this.#setLowerAlphabet);
        if (parms.pwInNum) chars.push(...this.#setNumbers);
        if (parms.pwInSym) chars.push(...this.#setSymbols);
        const exChars = parms.pwExChars.split("");
        chars = chars.filter((char) => !exChars.includes(char));

        if (chars.length === 0) return "No characters available";

        const length = parms.pwLength;
        let pw = "";
        for (let i = 0; i < length; i++) {
            pw += chars[randomRange(0, chars.length)];
        }

        return pw;
    }
}