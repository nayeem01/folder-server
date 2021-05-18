"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./config/db"));
const endpoints_config_1 = __importDefault(require("./config/endpoints.config"));
const folder_1 = __importDefault(require("./router/folder"));
const app = express_1.default();
const PORT = endpoints_config_1.default.PORT || 5000;
db_1.default();
app.use(morgan_1.default('dev'));
app.use(body_parser_1.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/api', folder_1.default);
app.listen(PORT, () => console.log(`server is runnig on ${PORT}`));
