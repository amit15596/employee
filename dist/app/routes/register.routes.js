"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import node module
const express_1 = __importDefault(require("express"));
// import local files
const register_validation_1 = __importDefault(require("../validation/register.validation"));
const register_controller_1 = __importDefault(require("../controllers/register.controller"));
const regRouter = express_1.default.Router();
regRouter.post('/api/v1/register', register_validation_1.default, register_controller_1.default.register);
exports.default = regRouter;
//# sourceMappingURL=register.routes.js.map