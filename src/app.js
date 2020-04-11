// ES6 배우고 나서 할 예정
import { express } from "express";

let app = express();
const port = 8080;

app.get("/", (req, res) => res.send("hello World"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
