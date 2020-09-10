"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import node modules
const bcrypt_1 = __importDefault(require("bcrypt"));
// import local model
const models_1 = __importDefault(require("../database/models"));
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: yield bcrypt_1.default.hash(req.body.password, 10),
            phone: req.body.phone,
            is_active: req.body.is_active,
        };
        models_1.default.users.create(userData).then(data => {
            res.json({ "status": 200, "message": "Inserted Data Successfully", "response": data });
        }).catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
            res.json({ "status": 500, "error": "Internal Server Error" });
        });
    });
}
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        models_1.default.users.findAll()
            .then(users => {
            res.json({ "status": 200, "response": users });
        }).catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
            res.json({ "status": 500, "error": "Internal Server Error" });
        });
    });
}
function findOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        models_1.default.users.findByPk(id)
            .then(user => {
            res.json({ "status": 200, "response": user });
        }).catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
            res.json({ "status": 500, "error": "Internal Server Error" });
        });
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt_1.default(req.body.password, 10),
            phone: req.body.phone,
            is_active: req.body.is_active,
        };
        models_1.default.users.update(userData, {
            where: { id }
        }).then(data => {
            res.json({ "status": 200, "mesage": "Updated Data Successfully" });
        }).catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
            res.json({ "status": 500, "error": "Internal Server Error" });
        });
    });
}
function deleteRecord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        models_1.default.user.destroy({
            where: { id }
        }).then(user => {
            res.json({ "status": 200, "mesage": "Deleted Data Successfully" });
        }).catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
            res.json({ "status": 500, "error": "Internal Server Error" });
        });
    });
}
exports.default = {
    create,
    findOne,
    findAll,
    update,
    deleteRecord
};
//# sourceMappingURL=user.model.js.map