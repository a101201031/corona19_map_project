"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
dotenv_1.config();
exports.default = () => {
    function dbConnect() {
        mongoose_1.connect(process.env.DB_FULL_URL ? process.env.DB_FULL_URL : 'none', (err) => {
            if (err) {
                console.log('--MongoDB Connection Error--');
            }
            else {
                console.log('--MonogoDB Is Conncected--');
            }
        });
    }
    dbConnect();
    mongoose_1.connection.on('disconnected', dbConnect);
};
console.log(typeof process.env.DB_FULL_URL);
//# sourceMappingURL=dbConnect.js.map