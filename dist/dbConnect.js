"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = () => {
  function dbConnect() {
    _mongoose.default.connect(process.env.DB_FULL_URL, err => {
      if (err) {
        console.log('mongoDB Connection Error.', err);
      }

      console.log('mongoDB is Connected.');
    });
  }

  dbConnect();

  _mongoose.default.connection.on('disconnected', dbConnect);
};

exports.default = _default;