import mongoose from 'mongoose';
import confirmedCasesModel from './model/confirmedCases';
import seoulCoronaCrawler from './crawler/seoulCoronaCrawler';

const confirmedCases = new confirmedCasesModel();

export class CoronaInfo {
  constructor() {
    this.load();
  }

  get info() {
    return this.data;
  }

  async load() {
    this.data = await seoulCoronaCrawler();
  }

  async save() {
    console.log('save...');
    const upsertQuery = [];
    try {
      const session = await mongoose.startSession();
      session.startTransaction();

      await this.data.forEach(async (val) => {
        const upsertDoc = {
          updateOne: {
            filter: { confirmedNo: val.confirmedNo },
            update: val,
            upsert: true,
          },
          session: session,
        };
        // console.log(upsertDoc.updateOne);
        await upsertQuery.push(upsertDoc);
      });

      await confirmedCases.collection.bulkWrite(upsertQuery);

      await confirmedCases.save({ session });
      await session.commitTransaction();

      session.endSession();
    } catch (err) {
      console.log(err);
    }
  }
}
