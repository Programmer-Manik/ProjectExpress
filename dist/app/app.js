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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
// Routing in express
const userRouting = express_1.default.Router();
const userPostRouter = express_1.default.Router();
app.use("/api/v1/users", userRouting);
app.use("/api/v1/course", userPostRouter);
userRouting.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'user data show ',
        data: user
    });
});
userPostRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'user data show ',
        data: course
    });
});
//middleware 
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
///:useId/:subUser
// error catch system 
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send();
    }
    catch (error) {
        next(error);
        // res.status(400).json({
        //   success:false,
        //   message:'failed to get data',
        // })
    }
}));
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'success data pas'
    });
});
//all get And post error handler
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found',
    });
});
// global error handler 
app.use((error, req, res, next) => {
    res.status(400).json({
        success: false,
        message: 'something wrong ',
    });
});
exports.default = app;
