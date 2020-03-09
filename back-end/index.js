const express = require("express");
const { Readable } = require("stream");
const cors = require('cors');
const faker = require("faker");
const { thinid } = require("thinid");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.json("Chao Xin"));

////////////////////Handle CSV////////////////////
const _delay = async time => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

// Get fake data
const _getText = async () => {
  await _delay(300);

  return `"${thinid()}","${faker.name.findName()}"\n`;
};

class MyFileStreaming extends Readable {
  constructor(opt) {
    super(opt);

    this._i = 0;
    this.push('"ID", "Name"\n');
  }

  async _read() {
    this._i = this._i + 1;
    if (this._i >= 100) {
      // Push null to finish
      return this.push(null);
    }

    const row = await _getText();
    this.push(row);
  }
}

app.get("/csv", (req, res) => {
  res.attachment("test.csv");
  const readableStream = new MyFileStreaming();
  readableStream.pipe(res);
});
//////////////////////////////////////////////////

app.listen(7777, () =>
  console.log("App is listening on http://127.0.0.1:7777")
);
