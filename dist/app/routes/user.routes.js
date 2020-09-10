"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import node module
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
// import local files
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_validation_1 = __importDefault(require("../validation/user.validation"));
const userRouter = express_1.default.Router();
userRouter.get('/api/v1/user', passport_1.default.authenticate('jwt', { session: false }), user_controller_1.default.getUserList);
userRouter.get('/api/v1/user/:id', passport_1.default.authenticate('jwt', { session: false }), user_controller_1.default.getUserDetails);
userRouter.post('/api/v1/user', passport_1.default.authenticate('jwt', { session: false }), user_validation_1.default, user_controller_1.default.addUserDetails);
userRouter.put('/api/v1/user/:id', passport_1.default.authenticate('jwt', { session: false }), user_validation_1.default, user_controller_1.default.updateUserDetails);
userRouter.delete('/api/v1/user/:id', passport_1.default.authenticate('jwt', { session: false }), user_controller_1.default.deleteUserDetails);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map