import mongoose, { connection } from 'mongoose';
import { config } from 'dotenv';

config();
export default () => {
  function dbConnect() {
    mongoose.connect(process.env.DB_FULL_URL ? process.env.DB_FULL_URL : 'none', (err) => {
      if (err) {
        console.log('--MongoDB Connection Error--');
      } else {
        console.log('--MonogoDB Is Conncected--');
      }
    });
  }
  dbConnect();
  mongoose.connection.on('disconnected', dbConnect);
};

console.log(typeof process.env.DB_FULL_URL);
