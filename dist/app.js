"use strict";

var _express = _interopRequireDefault(require("express"));

var bodyPaser = _interopRequireWildcard(require("body-parser"));

var ejs = _interopRequireWildcard(require("ejs"));

var _swaggerDoc = require("./swaggerDoc");

var _router = require("./router");

var _path = require("path");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 3000;
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({
  extended: false
}));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(_express.default.static((0, _path.join)(__dirname, '/public')));
app.use('/', _router.mainRouter);
app.use(_swaggerDoc.swaggerRouter); // API Docs
//app.get("/", (req, res) => res.send("hello World"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));