import { config } from 'dotenv';
import { connect, connection } from 'mongoose';

config();
export default () => {
  function dbConnect() {
    connect(process.env.DB_FULL_URL ? process.env.DB_FULL_URL : 'none', (err) => {
      if (err) {
        console.log('--MongoDB Connection Error--');
      } else {
        console.log('--MonogoDB Is Conncected--');
      }
    });
  }
  dbConnect();
  connection.on('disconnected', dbConnect);
};

console.log(typeof process.env.DB_FULL_URL);
