import express from 'express';
import PasswordGenerator from '../utils/password-generator.js';

export const PasswordGeneratorRouter = express.Router();
const pwGenerator = new PasswordGenerator();

PasswordGeneratorRouter.get(['/', '/index.html'], (req, res) => res.redirect('/index'));
PasswordGeneratorRouter.get('/index', (req, res) => res.render('index', resolveReqBody({})));
PasswordGeneratorRouter.post('/index', (req, res) => res.render('index', resolveReqBody(req.body)));

function resolveReqBody(body) {
    const d = {
        pwLength: body["pw-length"] ?? 4,
        pwInLower: body["pw-in-lower"] ? "checked" : "",
        pwInUpper: body["pw-in-upper"] ? "checked" : "",
        pwInNum: body["pw-in-num"] ? "checked" : "",
        pwInSym: body["pw-in-sym"] ? "checked" : "",
        pwExChars: body["pw-ex-chars"] ? body["pw-ex-chars"].trim() : ""
    }

    const isSetValid = d.pwInLower || d.pwInUpper || d.pwInNum || d.pwInSym;
    d.pwGen = isSetValid ? pwGenerator.getRandomPassword(d) : "You must select at least one character set";
    d.isResultVisible = Object.keys(body).length !== 0 ? "" : "d-none";
    return d;
}