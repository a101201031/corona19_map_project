"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoronaInfo = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _confirmedCases = _interopRequireDefault(require("./model/confirmedCases"));

var _seoulCoronaCrawler = _interopRequireDefault(require("./crawler/seoulCoronaCrawler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const confirmedCases = new _confirmedCases.default();

class CoronaInfo {
  constructor() {
    this.load();
  }

  get info() {
    return this.data;
  }

  async load() {
    this.data = await (0, _seoulCoronaCrawler.default)();
  }

  async save() {
    console.log('save...');
    const upsertQuery = [];

    try {
      const session = await _mongoose.default.startSession();
      session.startTransaction();
      await this.data.forEach(async val => {
        const upsertDoc = {
          updateOne: {
            filter: {
              confirmedNo: val.confirmedNo
            },
            update: val,
            upsert: true
          },
          session: session
        }; // console.log(upsertDoc.updateOne);

        await upsertQuery.push(upsertDoc);
      });
      await confirmedCases.collection.bulkWrite(upsertQuery);
      await confirmedCases.save({
        session
      });
      await session.commitTransaction();
      session.endSession();
    } catch (err) {
      console.log(err);
    }
  }

}

exports.CoronaInfo = CoronaInfo;