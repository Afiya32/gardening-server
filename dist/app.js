"use strict";
// app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./app/modules/user/user.routes"));
const user_routes_2 = __importDefault(require("./app/modules/user/user.routes"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use("/api/users", user_routes_2.default);
app.use('/api/posts', user_routes_1.default);
app.get('/', (req, res) => {
    res.send(`Gardening platform server is online now..
         welcome to green world`);
});
exports.default = app;
