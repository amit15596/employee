"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import local
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const loginRouter = express_1.default.Router();
loginRouter.get('/api/v1/login', (req, res) => {
    // req.render('/api/v1');
});
loginRouter.post('/api/v1/login', login_controller_1.default.login);
exports.default = loginRouter;
//# sourceMappingURL=login.routes.js.map