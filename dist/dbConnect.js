"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.default = () => {
    function dbConnect() {
        mongoose_1.default.connect(process.env.DB_FULL_URL ? process.env.DB_FULL_URL : 'none', (err) => {
            if (err) {
                console.log('--MongoDB Connection Error--');
            }
            else {
                console.log('--MonogoDB Is Conncected--');
            }
        });
    }
    dbConnect();
    mongoose_1.default.connection.on('disconnected', dbConnect);
};
console.log(typeof process.env.DB_FULL_URL);
//# sourceMappingURL=dbConnect.js.map