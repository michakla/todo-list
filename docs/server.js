"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
function processLineByLine() {
    console.log("read file line by line");
    const content = fs.readFileSync("c:/tmp/input.txt");
    return content.toString();
}
;
app.use('/', express.static('./dist', { index: "index.html" }));
app.listen(port, () => {
    console.log(`Èxample app listen on port ${port}!`);
});
app.get('/read-file', (reg, res) => {
    res.json({ data: processLineByLine() });
});
//# sourceMappingURL=server.js.map